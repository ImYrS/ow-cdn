"""
    @Author: ImYrS Yang
    @Date: 2023/3/31
    @Copyright: ImYrS Yang
    @Description: 
"""

import os
import random
import zipfile
import shutil

import requests

PROXIES = None

USER = 'alist-org'
REPO = 'web-dist'
GH_TOKEN = os.environ['GH_TOKEN']
DIR = os.environ['DIR']

os.environ['NO_PROXY'] = '*'


def download(tag: dict) -> bool:
    """
    下载 tag

    :param tag:
    :return:
    """
    t_name = tag['name']
    if os.path.exists(f'{DIR}/{t_name}'):
        return False

    r_fn = f'{REPO}-{random.randint(100000, 999999)}.zip'
    r_dir = f'{REPO}-{random.randint(100000, 999999)}'

    print(f'+ 检测到 {USER}/{REPO}/{t_name}, 正在下载为 {r_fn}')

    r = requests.get(
        tag['zipball_url'],
        proxies=PROXIES,
    )

    with open(r_fn, 'wb') as f:
        f.write(r.content)

    print(f'> {t_name} 下载完成, 正在解压至临时目录 {r_dir}')

    with zipfile.ZipFile(r_fn, 'r') as f:
        f.extractall(r_dir)

    print(f'> {t_name} 解压完成, 正在移动至 {DIR}/{t_name}')

    if not os.path.exists(DIR):
        mkdir(DIR)

    shutil.move(f'{r_dir}/{os.listdir(r_dir)[0]}', f'{DIR}/{t_name}')

    print(f'> {t_name} 移动完成, 正在删除临时文件')

    shutil.rmtree(r_dir)
    os.remove(r_fn)

    print(f'> {t_name} 更新完成')

    return True


def mkdir(path):
    for p in path.strip().split('/'):
        if not os.path.exists(p):
            os.mkdir(p)


def main():
    r = requests.get(
        f'https://api.github.com/repos/{USER}/{REPO}/tags',
        proxies=PROXIES,
        headers={
            'Accept': 'application/vnd.github+json',
            'Authorization': f'token {GH_TOKEN}',
        },
    )

    tags = r.json()
    updated = False

    for tag in tags:
        if download(tag):
            updated = True

        break

    if not updated:
        print(f'- 未检测到 {USER}/{REPO} 的更新')

    with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
        f.write(f'updated={"true" if updated else "false"}')


if __name__ == '__main__':
    main()
