import{c0 as s}from"./index.afc5cbef.js";const i="Backup",r="Restore",a="Start backup",n="Finish backup",d="[ {{item}} ] Backup was successful",l="[ {{item}} ] Backup failed",c="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",m="Override",f={backup:i,restore:r,start_backup:a,finish_backup:n,success_backup_item:d,failed_backup_item:l,no_file:c,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h,override:m},g={paths:"Paths"},y={internal_upload:"Internal upload",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},b={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",drive_type:"Drive type",drive_types:{backup:"Backup",default:"Default",resource:"Resource"},internal_upload:"Internal upload","internal_upload-tips":"If you are using Aliyun ECS is located in Beijing, you can turn it on to boost the upload speed",livp_download_format:"Livp download format",livp_download_formats:{jpeg:"Jpeg",mov:"Mov"},oauth_token_url:"Oauth token url",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload","rapid_upload-tips":"If you enable this option, the file will be uploaded to the server first, so the progress will be incorrect",refresh_token:"Refresh token",remove_way:"Remove way",remove_ways:{delete:"Delete",trash:"Trash"},root_folder_id:"Root folder id"},w={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},k={client_id:"Client id",client_secret:"Client secret",custom_crack_ua:"Custom crack ua",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path",upload_api:"Upload api",upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},v={album_id:"Album id",client_id:"Client id",client_secret:"Client secret",delete_origin:"Delete origin",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"},upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},S={BDUSS:"BDUSS",pwd:"Pwd",root_folder_path:"Root folder path",surl:"Surl"},C={bbsid:"Bbsid",cookie:"Cookie",password:"Password",root_folder_id:"Root folder id",user_name:"User name"},P={address:"Address",cookie:"Cookie",custom_ua:"Custom ua",enable_thumb_and_folder_size:"Enable thumb and folder size",password:"Password",root_folder_path:"Root folder path",username:"Username"},R={directory_name_encryption:"Directory name encryption",directory_name_encryptions:{false:"False",true:"True"},encrypted_suffix:"Encrypted suffix","encrypted_suffix-tips":"for advanced user only! encrypted files will have this suffix",filename_encoding:"Filename encoding","filename_encoding-tips":"for advanced user only!",filename_encodings:{base32:"Base32",base32768:"Base32768",base64:"Base64"},filename_encryption:"Filename encryption",filename_encryptions:{obfuscate:"Obfuscate",off:"Off",standard:"Standard"},password:"Password","password-tips":"the main password",remote_path:"Remote path","remote_path-tips":"This is where the encrypted data stores",salt:"Salt","salt-tips":"If you don't know what is salt, treat it as a second password. Optional but recommended",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail which pre-generated under .thumbnails folder"},A={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",oauth_token_url:"Oauth token url",refresh_token:"Refresh token",root_folder_path:"Root folder path"},x={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},T={chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},D={client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},U={account:"Account",baseUrl:"BaseUrl","baseUrl-tips":"basic URL for file operation",cookie:"Cookie","cookie-tips":"about 15 days valid, ignore if shareUrl is used",password:"Password",repair_file_info:"Repair file info","repair_file_info-tips":"To use webdav, you need to enable it",root_folder_id:"Root folder id",shareUrl:"ShareUrl","shareUrl-tips":"used to get the sharing page",share_password:"Share password",type:"Type",types:{account:"Account",cookie:"Cookie",url:"Url"}},z={mkdir_perm:"Mkdir perm",root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumb_cache_folder:"Thumb cache folder",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},O={access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},F={email:"Email",password:"Password"},L={cloud_id:"Cloud id",device_info:"Device info",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",phone:"Phone",root_folder_id:"Root folder id",upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},B={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",custom_host:"Custom host","custom_host-tips":"Custom host for onedrive download link",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},M={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",custom_host:"Custom host","custom_host-tips":"Custom host for onedrive download link",email:"Email",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",tenant_id:"Tenant id"},N={disable_media_link:"Disable media link",password:"Password",root_folder_id:"Root folder id",username:"Username"},I={password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},j={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},E={access_key_id:"Access key id",add_filename_to_disposition:"Add filename to disposition","add_filename_to_disposition-tips":"Add filename to Content-Disposition header.",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",remove_bucket:"Remove bucket","remove_bucket-tips":"Remove bucket name from path when using custom host.",root_folder_path:"Root folder path",secret_access_key:"Secret access key",session_token:"Session token",sign_url_expire:"Sign url expire"},q={address:"Address",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},V={address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},G={address:"Address",password:"Password",repoId:"RepoId",root_folder_path:"Root folder path",username:"Username"},W={cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id",use_s3_upload_method:"Use s3 upload method"},Y={cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},Q={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},H={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},K={AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"Root folder id"},$={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},X={anti_theft_chain_token:"Anti theft chain token",bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},J={head_size:"Head size","head_size-tips":"Use head method to get file size, but it may be failed.",url_structure:"Url structure","url_structure-tips":`structure:FolderName:
  [FileName:][FileSize:][Modified:]Url`},Z={cookie:"Cookie",order_by:"Order by",order_bys:{CreatTime:"CreatTime",Name:"Name",Size:"Size",UpdateTime:"UpdateTime"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},root_folder_id:"Root folder id",tf_uid:"Tf uid"},ee={max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},oe={address:"Address",password:"Password",root_folder_path:"Root folder path",tls_insecure_skip_verify:"Tls insecure skip verify",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},te={cookies:"Cookies",order_by:"Order by",order_bys:{name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",upload_thread:"Upload thread","upload_thread-tips":"4<=thread<=32"},se={access_token:"Access token",family_id:"Family id","family_id-tips":"Keep it empty if you want to use your personal drive",refresh_token:"Refresh token",root_folder_id:"Root folder id",sort_rule:"Sort rule",sort_rules:{name_asc:"Name asc",name_desc:"Name desc",size_asc:"Size asc",size_desc:"Size desc",time_asc:"Time asc",time_desc:"Time desc"}},ie={client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},re={"115 Cloud":{},"115 Share":{},"123Pan":{},"123PanLink":{},"123PanShare":{},"139Yun":{},"189Cloud":{alert:"You can try to use 189PC driver if this driver does not work."},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:`There may be an infinite loop bug in this driver.
Deprecated, no longer maintained and will be removed in a future version.
We recommend using the official driver AliyundriveOpen.`},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},ChaoXingGroupDrive:{},Cloudreve:{},Crypt:{},Dropbox:{},FTP:{},GoogleDrive:{},GooglePhoto:{},"IPFS API":{},Lanzou:{},Local:{},MediaTrack:{},Mega_nz:{},MoPan:{alert:"This network disk may store your password in clear text. Please set your password carefully"},Onedrive:{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderExpert:{},Trainbit:{},UC:{},USS:{},UrlTree:{},VTencent:{},Virtual:{},WebDav:{},WeiYun:{},WoPan:{},YandexDisk:{}},ae={"115 Cloud":"115 Cloud","115 Share":"115 Share","123Pan":"123Pan","123PanLink":"123PanLink","123PanShare":"123PanShare","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"BaiduShare",ChaoXingGroupDrive:"ChaoXingGroupDrive",Cloudreve:"Cloudreve",Crypt:"Crypt",Dropbox:"Dropbox",FTP:"FTP",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto","IPFS API":"IPFS API",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",MoPan:"MoPan",Onedrive:"Onedrive",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",Trainbit:"Trainbit",UC:"UC",USS:"USS",UrlTree:"UrlTree",VTencent:"VTencent",Virtual:"Virtual",WebDav:"WebDav",WeiYun:"WeiYun",WoPan:"WoPan",YandexDisk:"YandexDisk"},ne={"115 Cloud":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",limit_rate:"Limit rate","limit_rate-tips":"limit all api request rate (1r/[limit_rate]s)",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",root_folder_id:"Root folder id"},"115 Share":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",limit_rate:"Limit rate","limit_rate-tips":"limit all api request rate (1r/[limit_rate]s)",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",receive_code:"Receive code","receive_code-tips":"receive code of 115 share link",root_folder_id:"Root folder id",share_code:"Share code","share_code-tips":"share code of 115 share link"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",username:"Username"},"123PanLink":{origin_urls:"Origin urls","origin_urls-tips":`structure:FolderName:
  [FileSize:][Modified:]Url`,private_key:"Private key",uid:"Uid",valid_duration:"Valid duration","valid_duration-tips":"minutes"},"123PanShare":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",sharekey:"Sharekey",sharepassword:"Sharepassword"},"139Yun":{authorization:"Authorization",cloud_id:"Cloud id",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"}},"189Cloud":{cookie:"Cookie","cookie-tips":"Fill in the cookie if need captcha",password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",rapid_upload:"Rapid upload",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},upload_method:"Upload method",upload_methods:{old:"Old",rapid:"Rapid",stream:"Stream"},upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32",username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{meta_password:"Meta password",password:"Password",root_folder_path:"Root folder path",token:"Token",url:"Url",username:"Username"},Alias:g,Aliyundrive:y,AliyundriveOpen:b,AliyundriveShare:w,BaiduNetdisk:k,BaiduPhoto:v,BaiduShare:S,ChaoXingGroupDrive:C,Cloudreve:P,Crypt:R,Dropbox:A,FTP:x,GoogleDrive:T,GooglePhoto:D,"IPFS API":{endpoint:"Endpoint",gateway:"Gateway",root_folder_path:"Root folder path"},Lanzou:U,Local:z,MediaTrack:O,Mega_nz:F,MoPan:L,Onedrive:B,OnedriveAPP:M,PikPak:N,PikPakShare:I,Quark:j,S3:E,SFTP:q,SMB:V,Seafile:G,Teambition:W,Terabox:Y,Thunder:Q,ThunderExpert:H,Trainbit:K,UC:$,USS:X,UrlTree:J,VTencent:Z,Virtual:ee,WebDav:oe,WeiYun:te,WoPan:se,YandexDisk:ie,config:re,drivers:ae},de="Refresh",le="Add",ce="Edit",_e="Save",pe="Update",ue="Copied",he="Deleted successfully",me="Saved successfully",fe="Updated successfully",ge="Choose",ye="Confirm",be="Cancel",we="Are you sure you want to delete [{{name}}]?",ke="Operations",ve="Yes",Se="No",Ce="Clear",Pe="Select folder",Re="Select folder or input path",Ae="Disable",xe="Enable",Te="OK",De="Back",Ue="Have an account?",ze="Go to login",Oe="Close",Fe="Not currently supported",Le="Please enter",Be={refresh:de,add:le,edit:ce,delete:"Delete",save:_e,update:pe,copied:ue,delete_success:he,save_success:me,update_success:fe,choose:ge,confirm:ye,cancel:be,delete_confirm:we,operations:ke,yes:ve,no:Se,clear:Ce,choose_folder:Pe,choose_or_input_path:Re,disable:Ae,enable:xe,ok:Te,back:De,have_account:Ue,go_login:ze,close:Oe,no_support_now:Fe,empty_input:Le},Me={name:"Name",size:"Size",modified:"Modified"},Ne={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",play_with:"Play with ...",install:"Install",installing:"Installing","tr-install":"TrollStore","tr-installing":"TrollStore Installing",open_in_new_window:"Open in new window",auto_next:"Auto next"},Ie={list:"List View",grid:"Grid View",image:"Image View"},je="No images in the current folder",Ee="Load more",qe="No more",Ve="Please input password",Ge={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",delete_policy:{delete_on_upload_succeed:"Delete on upload succeed",delete_on_upload_failed:"Delete on upload failed",delete_never:"Never delete",delete_always:"Always delete"},download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings",recursive_move:"Recursive Move","recursive_move_directory-tips":"Are you sure you want to move all files in the current folder and its subfolders to the specified folder?",remove_empty_directory:"Remove Empty Folder","remove_empty_directory-tips":"Are you sure to delete all its empty subfolders?",batch_rename:"Batch Rename",regex_rename:"Regex Rename",sequential_renaming:"Sequential Rename",regex_rename_preview:"Changed Files",regex_rename_preview_old_name:"Old Name",regex_rename_preview_new_name:"New Name",regular_rename:"Regular expression file renaming. Input the source file name regular expression on the first line, and input the new file name regular expression on the second line.",sequential_renaming_desc:"The new file name will have a numerical starting value appended to it, and it will be displayed sequentially by adding 1 to the starting value. Enter the new file name on the first line and the starting value on the second line."},We={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},Ye={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory",show_folder_in_image_view:"Show folder in image view",show_folder_in_image_view_options:{top:"Top",bottom:"Bottom",none:"None"},global_default_layout:"Global default layout",global_default_layout_options:{list:"List View",grid:"Grid View",image:"Image View"}},Qe={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},He={powered_by:"Powered by AList",manage:"Manage"},Ke={search:"Search",no_result:"No result yet",scopes:{all:"All",folder:"Folder",file:"File"}},$e="Failed fetching settings: ",Xe="Failed get current user: ",Je={obj:Me,preview:Ne,layouts:Ie,no_images:je,load_more:Ee,no_more:qe,input_password:Ve,toolbar:Ge,upload:We,local_settings:Ye,package_download:Qe,footer:He,search:Ke,fetching_settings_failed:$e,get_current_user_failed:Xe,"Loading storage, please wait":"Loading storage, please wait"},Ze="Search index",eo="Current indexes",oo="Build indexes",to="Rebuild indexes",so="Paths to update",io="Max depth",ro="Update indexes",ao="Object count",no="Last done time",lo="Unknown",co="Stop",_o="Clear",po="Error",uo={search_index:Ze,current:eo,build:oo,rebuild:to,paths_to_update:so,max_depth:io,update:ro,obj_count:ao,last_done_time:no,unknown:lo,stop:co,clear:_o,error:po},ho="Login to the",mo="Remember me",fo="Forget password?",go="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",yo="Clear",bo="Login",wo="Browse as a guest",ko="Login successfully",vo={login_to:ho,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:mo,forget:fo,forget_url:go,clear:yo,login:bo,use_guest:wo,success:ko},So={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",sso:"Single Sign-on",docs:"Documentation",offline_download:"Offline Download"},Co="AList Manage",Po="You are not admin user, please login with admin account.",Ro="Logout successfully",Ao="Send",xo="Receive",To="Received messages",Do={sidemenu:So,title:Co,not_admin:Po,logout_success:Ro,send:Ao,receive:xo,received_msgs:To,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},Uo="Path",zo="Password",Oo="Write",Fo="Hide",Lo="Readme",Bo="Render a markdown at the bottom, support content or link",Mo="Header",No="Render a markdown at the top, support content or link",Io="Apply to sub folder",jo="One regular expression per line",Eo={path:Uo,password:zo,write:Oo,hide:Fo,readme:Lo,readme_help:Bo,header:Mo,header_help:No,apply_sub:Io,hide_help:jo},qo="Allow indexed",Vo="Allow mounted",Go="Announcement",Wo="Aria2 secret",Yo="Aria2 uri",Qo="Audio autoplay",Ho="Audio cover",Ko="Audio types",$o="Auto update index",Xo="Customize body",Jo="Customize head",Zo="Default page size",et="External previews",ot="Favicon",tt="Filename char mapping",st="Forward direct link params",it="Hide files",rt="Home container",at={hope_container:"Hope container",max_980px:"Max 980px"},nt="Home icon",dt="Iframe previews",lt="Ignore direct link params",ct="Ignore paths",_t="Image types",pt="Index progress",ut="Link expiration",ht="Logo",mt="Main color",ft="Max index depth",gt="Ocr api",yt="Package download",bt="Pagination type",wt={all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},kt="Privacy regs",vt="Proxy ignore headers",St="Proxy types",Ct="Qbittorrent seedtime",Pt="Qbittorrent url",Rt="Robots txt",At="Search index",xt={bleve:"Bleve",database:"Database",database_non_full_text:"Database non full text",none:"None"},Tt="Settings layout",Dt={list:"List",responsive:"Responsive"},Ut="Sign all",zt="Site title",Ot="Sso application name",Ft="Sso auto register",Lt="Sso client id",Bt="Sso client secret",Mt="Sso compatibility mode",Nt="Sso default dir",It="Sso default permission",jt="Sso endpoint name",Et="Sso jwt public key",qt="Sso login enabled",Vt="Sso login platform",Gt={Casdoor:"Casdoor",Dingtalk:"Dingtalk",Github:"Github",Google:"Google",Microsoft:"Microsoft",OIDC:"OIDC"},Wt="Sso oidc username key",Yt="Sso organization name",Qt="Text types",Ht="Token",Kt="Version",$t="Video autoplay",Xt="Video types",Jt="Webauthn login enabled",Zt={allow_indexed:qo,allow_mounted:Vo,announcement:Go,aria2_secret:Wo,aria2_uri:Yo,audio_autoplay:Qo,audio_cover:Ho,audio_types:Ko,auto_update_index:$o,customize_body:Xo,customize_head:Jo,default_page_size:Zo,external_previews:et,favicon:ot,filename_char_mapping:tt,forward_direct_link_params:st,hide_files:it,home_container:rt,home_containers:at,home_icon:nt,iframe_previews:dt,ignore_direct_link_params:lt,ignore_paths:ct,"ignore_paths-tips":"one path per line",image_types:_t,index_progress:pt,link_expiration:ut,logo:ht,main_color:mt,max_index_depth:ft,"max_index_depth-tips":"max depth of index",ocr_api:gt,package_download:yt,pagination_type:bt,pagination_types:wt,privacy_regs:kt,proxy_ignore_headers:vt,proxy_types:St,qbittorrent_seedtime:Ct,qbittorrent_url:Pt,robots_txt:Rt,search_index:At,search_indexs:xt,settings_layout:Tt,settings_layouts:Dt,sign_all:Ut,site_title:zt,sso_application_name:Ot,sso_auto_register:Ft,sso_client_id:Lt,sso_client_secret:Bt,sso_compatibility_mode:Mt,sso_default_dir:Nt,sso_default_permission:It,sso_endpoint_name:jt,sso_jwt_public_key:Et,sso_login_enabled:qt,sso_login_platform:Vt,sso_login_platforms:Gt,sso_oidc_username_key:Wt,sso_organization_name:Yt,text_types:Qt,token:Ht,version:Kt,video_autoplay:$t,video_types:Xt,webauthn_login_enabled:Jt},es="Aria2",os="Aria2 Version:",ts="Set aria2",ss="Copy Token",is="Reset Token",rs="Reset Token Successfully",as="Unknown type",ns="Set qBittorrent",ds="qBittorrent",ls={aria2:es,aria2_version:os,set_aria2:ts,copy_token:ss,reset_token:is,reset_token_success:rs,unknown_type:as,set_qbit:ns,qbittorrent:ds},cs={mount_path:"Mount Path","mount_path-tips":"The path you want to mount to, it is unique and cannot be repeated",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"},enable_sign:"Enable sign"},_s={start_load_success:"Start loading",load_all:"Reload All",filter_by_driver:"Filter by driver",table_layout:"Table layout"},ps={common:cs,other:_s},us="Download file to local machine",hs="Transfer downloaded file to corresponding storage",ms="Upload file to corresponding storage",fs="Copy file from a storage to another storage",gs="Completed",ys="Running",bs="Clear Succeeded",ws="Retry",ks="Retry Failed",vs={0:"Pending",1:"Running",2:"Succeeded",3:"Canceling",4:"Canceled",5:"Errored",6:"Failing",7:"Failed",8:"WaitingRetry",9:"BeforeRetry"},Ss={offline_download:us,offline_download_transfer:hs,upload:ms,copy:fs,done:gs,undone:ys,clear_succeeded:bs,retry:ws,retry_failed:ks,state:vs},Cs={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},Ps="Username",Rs="Password",As="Base path",xs="Role",Ts="Permission",Ds="Disabled",Us="Available",zs="Update Profile",Os="Update profile successfully, please re-login.",Fs="Change Username",Ls="Change Password",Bs="Confirm Password",Ms="The password you input twice is not the same",Ns="Enable 2FA",Is="Cancel 2FA",js="Cancel 2FA successfully",Es="Scan the QR code to save the secret key",qs="Or input the secret key manually",Vs="Input the code of your 2FA app",Gs="Verify",Ws="So you cannot modify anything in the manage page.",Ys="Single sign-on Login",Qs="Connect Single sign-on Platform",Hs="Disconnect Single sign-on Platform",Ks="WebAuthn",$s="Add a Webauthn credential",Xs="Webauthn credential successfully added!",Js="Webauthn is not supported in your browser or you are in an unsafe origin",Zs={permissions:Cs,username:Ps,password:Rs,base_path:As,role:xs,permission:Ts,disabled:Ds,available:Us,update_profile:zs,update_profile_success:Os,change_username:Fs,change_password:Ls,"change_password-tips":"Keep the password empty if you don't want to change it",confirm_password:Bs,"confirm_password-tips":"Repeat the password that you just input",confirm_password_not_same:Ms,enable_2fa:Ns,cancel_2fa:Is,cancel_2fa_success:js,"2fa_already_enabled":"2FA is already enabled",scan_qr:Es,or_manual:qs,input_code:Vs,verify:Gs,"guest-tips":"You are currently visiting as a guest.",modify_nothing:Ws,sso_login:Ys,connect_sso:Qs,disconnect_sso:Hs,webauthn:Ks,add_webauthn:$s,add_webauthn_success:Xs,webauthn_not_supported:Js},o=Object.assign({"./br.json":f,"./drivers.json":ne,"./global.json":Be,"./home.json":Je,"./index.json":s,"./indexes.json":uo,"./login.json":vo,"./manage.json":Do,"./metas.json":Eo,"./settings.json":Zt,"./settings_other.json":ls,"./storages.json":ps,"./tasks.json":Ss,"./users.json":Zs}),ei={};for(const e in o){const t=e.split("/")[1].split(".")[0];ei[t]=o[e]}export{ei as default};