System.register(["./index-legacy.4d51292d.js"],(function(e){"use strict";var o;return{setters:[function(e){o=e.by}],execute:function(){var r={GoogleDrive:{client_id:"客户端ID",client_secret:"客户端密钥",root_folder_id:"根文件夹ID",refresh_token:"刷新令牌",order_by:"排序","order_by-tips":"例如: folder,name,modifiedTime",order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"}},"123Pan":{order_bys:{fileId:"文件ID",updateAt:"修改时间",createAt:"创建时间",name:"名称"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_id:"根文件夹ID",stream_upload:"流式上传",username:"用户名",password:"密码",order_by:"排序"},Virtual:{root_folder_path:"根文件夹路径",num_file:"文件数量",num_folder:"文件夹数量",max_file_size:"最大文件大小",min_file_size:"最小文件大小"},"139Yun":{types:{personal:"个人云",family:"家庭云"},cloud_id:"Cloud id",account:"帐号",cookie:"Cookie",root_folder_id:"根文件夹ID",type:"类型"},USS:{sign_url_expire:"签名链接有效期",root_folder_path:"根文件夹路径",bucket:"存储桶",endpoint:"Endpoint",operator_name:"操作员名称",operator_password:"操作员密码",custom_host:"自定义HOST"},YandexDisk:{client_secret:"客户端密钥",refresh_token:"刷新令牌",order_by:"排序",order_bys:{name:"名称",path:"路径",created:"创建时间",modified:"修改时间",size:"大小"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},root_folder_path:"根文件夹路径",client_id:"客户端ID"},FTP:{password:"密码",root_folder_path:"根文件夹路径",address:"地址",username:"用户名"},Aliyundrive:{order_by:"排序",order_bys:{name:"名称",size:"大小",updated_at:"修改时间",created_at:"创建时间"},order_direction:"排序方式",order_directions:{ASC:"升序",DESC:"降序"},rapid_upload:"秒传",root_folder_id:"根文件夹ID",refresh_token:"刷新令牌"},"189Cloud":{username:"用户名",password:"密码",root_folder_id:"根文件夹ID"},Quark:{cookie:"Cookie",root_folder_id:"根文件夹ID",order_by:"排序",order_bys:{file_type:"文件类型",file_name:"文件名称",updated_at:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"}},BaiduNetdisk:{root_folder_path:"根文件夹路径",order_by:"排序",order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},download_api:"下载接口",refresh_token:"刷新令牌",download_apis:{official:"官方",crack:"非官方"},client_id:"客户端ID",client_secret:"客户端密钥",order_bys:{time:"时间",size:"大小",name:"名称"}},Local:{root_folder_path:"根文件夹路径",thumbnail:"缩略图","thumbnail-tips":"启用缩略图"},S3:{secret_access_key:"安全访问密钥",custom_host:"自定义HOST",force_path_style:"强制路径样式",root_folder_path:"根文件夹路径",bucket:"存储桶",endpoint:"Endpoint",region:"地区",access_key_id:"访问密钥 Id",list_object_version:"列出对象版本",list_object_versions:{v1:"V1",v2:"V2"},sign_url_expire:"签名链接有效期",placeholder:"占位文件名"},MediaTrack:{access_token:"访问令牌",project_id:"项目 ID",root_folder_id:"根文件夹ID",order_by:"排序",order_bys:{size:"大小",updated_at:"修改时间",title:"名称"},order_desc:"降序排列"},Onedrive:{is_sharepoint:"是否Sharepoint",client_id:"客户端ID",client_secret:"客户端密钥",redirect_uri:"重定向 Uri",root_folder_path:"根文件夹路径",regions:{global:"全局设置",cn:"世纪互联",us:"美国版",de:"德国版"},site_id:"站点ID",region:"地区",refresh_token:"刷新令牌"},drivers:{WebDav:"WebDav",S3:"对象存储",SFTP:"SFTP",Aliyundrive:"阿里云盘",Virtual:"虚拟存储",Quark:"夸克",Teambition:"Teambition网盘","123Pan":"123云盘",MediaTrack:"分秒帧",YandexDisk:"Yandex网盘","189Cloud":"天翼云盘",PikPak:"PikPak",FTP:"FTP",Local:"本机存储",Onedrive:"Onedrive","139Yun":"中国移动云盘",USS:"又拍云存储","189CloudPC":"天翼云盘客户端",BaiduNetdisk:"百度网盘",GoogleDrive:"谷歌云盘"},"189CloudPC":{username:"用户名",type:"类型",family_id:"Family id",types:{personal:"个人云",family:"家庭云"},password:"密码",validate_code:"验证码",root_folder_id:"根文件夹ID",order_by:"排序",order_bys:{filename:"文件名",filesize:"文件大小",lastOpTime:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},rapid_upload:"秒传"},PikPak:{root_folder_id:"根文件夹ID",username:"用户名",password:"密码"},WebDav:{vendor:"供应商",vendors:{sharepoint:"Sharepoint",other:"其他"},address:"地址",username:"用户名",password:"密码",root_folder_path:"根文件夹路径"},SFTP:{address:"地址",username:"用户名",private_key:"私钥",password:"密码",root_folder_path:"根文件夹路径"},Teambition:{order_directions:{Asc:"升序",Desc:"降序"},region:"地区",regions:{international:"国际版",china:"中国"},cookie:"Cookie",root_folder_id:"根文件夹ID",order_by:"排序",order_bys:{fileName:"文件名",fileSize:"文件大小",updated:"修改时间",created:"创建时间"},project_id:"项目 ID",order_direction:"排序方式"}},a={refresh:"刷新",add:"添加",edit:"编辑",delete:"删除",save:"保存",update:"更新",copied:"已复制",delete_success:"删除成功!",save_success:"保存成功",update_success:"更新成功",choose:"选择",confirm:"确认",cancel:"取消",delete_confirm:"确认要删除 [{{name}}] 吗？",operations:"操作",yes:"是",no:"否",clear:"清除",choose_folder:"选择文件夹",choose_or_input_path:"选择文件夹或输入路径",disable:"禁用",enable:"启用",ok:"确定",back:"返回",have_account:"已有账号？",go_login:"转到登录",close:"关闭",no_support_now:"暂不支持",empty_input:"请输入"},i={obj:{name:"名称",size:"大小",modified:"修改时间"},preview:{download:"下载",failed_load_img:"载入图像失败",open_with:"使用... 打开",install:"安装",installing:"正在安装"},load_more:"加载更多",no_more:"没有更多了",input_password:"请输入密码",toolbar:{more:"更多",toggle_theme:"切换主题",switch_lang:"切换语言",toggle_checkbox:"开关复选框",rename:"重命名",input_new_name:"输入一个新名称","only_one-tips":"只能选择一个对象重命名",move:"移动",copy:"复制",choose_dst_folder:"选择目标文件夹",delete:"删除","delete-tips":"确定要删除所选对象吗?",copy_link:"复制链接",preview_page:"预览页面",down_link:"下载链接",encode_down_link:"编码下载链接",mkdir:"新建文件夹",input_dir_name:"输入文件夹名称",new_file:"新建文件",input_filename:"输入文件名",cancel_select:"取消选择",add_aria2:"添加到Aria2 下载","add_aria2-tips":"每行一个链接",download:"下载",batch_download:"批量下载",package_download:"打包下载",package_download_disabled:"打包下载已禁用",send_aria2:"发送到Aria2",aria2_not_set:"请设置 aria2 rpc url",send_aria2_success:"成功发送到aria2","pre_package_download-tips":"在浏览器中使用streamsaver而不是服务器来进行包下载需要相应的存储支持cors，而不支持的存储将失败。","package_download-tips":"正在下载，请稍候不要关闭页面",upload:"上传",local_settings:"本地设置"},upload:{add_as_task:"添加为任务","upload-tips":"拖动文件到此处以上传，或点击：",release:"松开以上传",no_files_drag:"没有文件被拖入.",only_files_or_one_folder:"每次只能拖动文件或一个文件夹。",upload_files:"选择文件",upload_folder:"选择文件夹",pending:"等待中...",uploading:"上传中",backending:"正在后台上传",success:"成功",error:"错误",back:"返回上传",clear_done:"清空完成"},local_settings:{aria2_rpc_url:"Aria2 RPC 链接",aria2_rpc_secret:"Aria2 RPC 密钥",aria2_dir:"Aria2 下载目录"},package_download:{current_status:"当前状态",initializing:"正在初始化",fetching_struct:"正在获取文件夹结构",fetching_struct_failed:"获取文件夹结构失败",downloading:"下载文件中，不要关闭或刷新页面",failed:"打包下载失败",success:"下载完成"},footer:{powered_by:"由 AList 驱动",manage:"管理"}},d={title:"登录到ALIST","username-tips":"输入您的用户名","password-tips":"输入您的密码","otp-tips":"输入您的 OTP 代码",remember:"记住账号",forget:"忘记密码？",clear:"清空",login:"登录",use_guest:"以游客身份浏览",success:"登录成功"},s={sidemenu:{dashboard:"控制面板",settings:"设置",site:"站点",style:"样式",preview:"预览",global:"全局设置",other:"其他",users:"用户",storages:"存储",metas:"元信息",profile:"个人资料",about:"关于",tasks:"任务",aria2:"Aria2",upload:"上传",copy:"复制",home:"主页"},title:"AList 管理",not_admin:"您不是管理员用户，请使用管理员帐户登录。",logout_success:"退出成功",send:"发送",recieve:"接收",recieved_msgs:"收到的消息","add_storage-tips":"您可能需要在新打开的选项卡中填写一些信息。","messenger-tips":"您可能需要在这个标签页中按提示填写一些信息。"},t={path:"路径",password:"密码",write:"写入",hide:"隐藏",readme:"说明",apply_sub:"应用到子文件夹",hide_help:"每行一个正则表达式",readme_help:"支持Markdown内容或Markdown链接"},_={external_previews:"外部预览",link_expiration:"直链有效期",ocr_api:"Ocr接口",aria2_uri:"Aria2地址",version:"版本",main_color:"主颜色",home_containers:{max_980px:"最大 980px",hope_container:"Hope 容器"},customize_head:"自定义头部",privacy_regs:"隐私内容正则表达式",aria2_secret:"Aria2 密钥",base_path:"基本路径",site_title:"网站标题",default_page_size:"默认每页数量",hide_files:"隐藏文件",customize_body:"自定义内容",pagination_type:"分页类型",favicon:"网站图标",announcement:"站点公告",iframe_previews:"Iframe 预览",package_download:"打包下载",image_types:"图片类型",audio_cover:"音频封面",api_url:"Api地址",pagination_types:{all:"全部",pagination:"分页",load_more:"加载更多",auto_load_more:"自动加载更多"},logo:"图标",home_icon:"首页图标",text_types:"文本类型",audio_types:"音频类型",video_types:"视频类型",proxy_types:"代理类型",audio_autoplay:"自动播放音频",video_autoplay:"自动播放视频",home_container:"主容器",token:"令牌"},n={aria2:"Aria2",aria2_version:"Aria2 版本：",set_aria2:"设置aria2",copy_token:"复制令牌",reset_token:"重置令牌",reset_token_success:"重置令牌成功",unkown_type:"未知类型"},c={common:{mount_path:"挂载路径",driver:"驱动",order:"序号","order-tips":"用于排序",status:"状态",remark:"备注",cache_expiration:"缓存过期时间","cache_expiration-tips":"此存储的缓存过期时间(分钟)",down_proxy_url:"下载代理URL",web_proxy:"Web 代理",webdav_policy:"WebDAV 策略",webdav_policys:{"302_redirect":"302重定向",use_proxy_url:"使用代理地址",native_proxy:"本地代理"},order_by:"排序",order_bys:{name:"名称",size:"文件大小",modified:"修改时间"},order_direction:"排序方式",order_directions:{asc:"升序",desc:"降序"},extract_folder:"提取文件夹",extract_folders:{front:"提取到最前",back:"提取到最后"}}},l={down:"下载文件到本地设备",transfer:"将下载的文件传输到相应的存储",upload:"上传文件到对应的存储",copy:"将文件从一个存储复制到另一个存储",done:"已完成",undone:"运行中...",pending:"等待中...",running:"正在运行...",canceling:"正在取消···",succeeded:"成功",canceled:"已取消",errored:"错误"},p={permissions:{see_hides:"可以看到隐藏",access_without_password:"无需密码访问",add_aria2:"添加 aria2 任务",write:"创建目录或上传",rename:"重命名",move:"移动",copy:"复制",delete:"删除",webdav_read:"Webdav 读取",webdav_manage:"Webdav 管理"},username:"用户名",password:"密码",base_path:"基本路径",role:"角色",permission:"权限",update_profile:"更新配置文件",update_profile_success:"更新个人资料成功，请重新登录。",change_username:"修改用户名",change_password:"更改密码","change_password-tips":"如果您不想更改密码，请保持为空",enable_2fa:"启用双重身份验证","2fa_already_enabled":"已启用双重身份验证",scan_qr:"扫描二维码保存密钥",input_code:"输入您的双重验证应用中显示的验证码",verify:"验证","guest-tips":"您正在作为访客访问。",modify_nothing:"所以您不能在管理页面中修改任何内容。"},u=Object.assign({"./drivers.json":r,"./global.json":a,"./home.json":i,"./index.json":o,"./login.json":d,"./manage.json":s,"./metas.json":t,"./settings.json":_,"./settings_other.json":n,"./storages.json":c,"./tasks.json":l,"./users.json":p}),m=e("default",{});for(var f in u)m[f.split("/")[1].split(".")[0]]=u[f]}}}));