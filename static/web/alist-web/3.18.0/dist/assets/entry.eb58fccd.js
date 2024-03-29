import{bB as s}from"./index.91ca9f2f.js";const r="Backup",i="Restore",n="Start backup",a="Finish backup",d="[ {{item}} ] Backup was successful",c="[ {{item}} ] Backup failed",l="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",m="Override",f={backup:r,restore:i,start_backup:n,finish_backup:a,success_backup_item:d,failed_backup_item:c,no_file:l,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h,override:m},g={paths:"Paths"},y={internal_upload:"Internal upload",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},b={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",internal_upload:"Internal upload","internal_upload-tips":"If you are using Aliyun ECS is located in Beijing, you can turn it on to boost the upload speed",oauth_token_url:"Oauth token url",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",remove_way:"Remove way",remove_ways:{delete:"Delete",trash:"Trash"},root_folder_id:"Root folder id"},k={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},w={client_id:"Client id",client_secret:"Client secret",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},v={album_id:"Album id",client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"}},S={BDUSS:"BDUSS",pwd:"Pwd",root_folder_path:"Root folder path",surl:"Surl"},C={address:"Address",cookie:"Cookie",password:"Password",root_folder_path:"Root folder path",username:"Username"},P={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},x={chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},A={client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},R={baseUrl:"BaseUrl","baseUrl-tips":"basic URL for file operation",cookie:"Cookie","cookie-tips":"about 15 days valid, ignore if shareUrl is used",repair_file_info:"Repair file info","repair_file_info-tips":"To use webdav, you need to enable it",root_folder_id:"Root folder id",shareUrl:"ShareUrl","shareUrl-tips":"used to get the sharing page",share_password:"Share password",type:"Type",types:{cookie:"Cookie",url:"Url"}},U={mkdir_perm:"Mkdir perm",root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumb_cache_folder:"Thumb cache folder",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},T={access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},D={email:"Email",password:"Password"},O={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},z={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",email:"Email",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",tenant_id:"Tenant id"},F={password:"Password",root_folder_id:"Root folder id",username:"Username"},L={password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},B={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},M={access_key_id:"Access key id",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",remove_bucket:"Remove bucket","remove_bucket-tips":"Remove bucket name from path when using custom host.",root_folder_path:"Root folder path",secret_access_key:"Secret access key",sign_url_expire:"Sign url expire"},N={address:"Address",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},j={address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},E={address:"Address",password:"Password",repoId:"RepoId",root_folder_path:"Root folder path",username:"Username"},I={cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id",use_s3_upload_method:"Use s3 upload method"},q={cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},V={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},G={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},Y={AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"Root folder id"},Q={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},W={bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},H={head_size:"Head size","head_size-tips":"Use head method to get file size, but it may be failed.",url_structure:"Url structure","url_structure-tips":`structure:FolderName:
  [FileName:][FileSize:][Modified:]Url`},$={max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},K={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},J={client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},X={"115 Cloud":{},"123Pan":{},"139Yun":{},"189Cloud":{alert:"You can try to use 189PC driver if this driver does not work."},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:`There may be an infinite loop bug in this driver.
Deprecated, no longer maintained and will be removed in a future version.
We recommend using the official driver AliyundriveOpen.`},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},Cloudreve:{},FTP:{},GoogleDrive:{},GooglePhoto:{},"IPFS API":{},Lanzou:{},Local:{},MediaTrack:{},Mega_nz:{},Onedrive:{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderExpert:{},Trainbit:{},UC:{},USS:{},UrlTree:{},Virtual:{},WebDav:{},YandexDisk:{}},Z={"115 Cloud":"115 Cloud","123Pan":"123Pan","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"BaiduShare",Cloudreve:"Cloudreve",FTP:"FTP",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto","IPFS API":"IPFS API",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",Onedrive:"Onedrive",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderExpert:"ThunderExpert",Trainbit:"Trainbit",UC:"UC",USS:"USS",UrlTree:"UrlTree",Virtual:"Virtual",WebDav:"WebDav",YandexDisk:"YandexDisk"},ee={"115 Cloud":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",root_folder_id:"Root folder id"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",stream_upload:"Stream upload",username:"Username"},"139Yun":{account:"Account",cloud_id:"Cloud id",cookie:"Cookie",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"}},"189Cloud":{cookie:"Cookie","cookie-tips":"Fill in the cookie if need captcha",password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},upload_method:"Upload method",upload_methods:{old:"Old",rapid:"Rapid",stream:"Stream"},username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{meta_password:"Meta password",password:"Password",root_folder_path:"Root folder path",token:"Token",url:"Url",username:"Username"},Alias:g,Aliyundrive:y,AliyundriveOpen:b,AliyundriveShare:k,BaiduNetdisk:w,BaiduPhoto:v,BaiduShare:S,Cloudreve:C,FTP:P,GoogleDrive:x,GooglePhoto:A,"IPFS API":{endpoint:"Endpoint",gateway:"Gateway",root_folder_path:"Root folder path"},Lanzou:R,Local:U,MediaTrack:T,Mega_nz:D,Onedrive:O,OnedriveAPP:z,PikPak:F,PikPakShare:L,Quark:B,S3:M,SFTP:N,SMB:j,Seafile:E,Teambition:I,Terabox:q,Thunder:V,ThunderExpert:G,Trainbit:Y,UC:Q,USS:W,UrlTree:H,Virtual:$,WebDav:K,YandexDisk:J,config:X,drivers:Z},oe="Refresh",te="Add",se="Edit",re="Save",ie="Update",ne="Copied",ae="Deleted successfully",de="Saved successfully",ce="Updated successfully",le="Choose",_e="Confirm",pe="Cancel",ue="Are you sure you want to delete [{{name}}]?",he="Operations",me="Yes",fe="No",ge="Clear",ye="Select folder",be="Select folder or input path",ke="Disable",we="Enable",ve="OK",Se="Back",Ce="Have an account?",Pe="Go to login",xe="Close",Ae="Not currently supported",Re="Please enter",Ue={refresh:oe,add:te,edit:se,delete:"Delete",save:re,update:ie,copied:ne,delete_success:ae,save_success:de,update_success:ce,choose:le,confirm:_e,cancel:pe,delete_confirm:ue,operations:he,yes:me,no:fe,clear:ge,choose_folder:ye,choose_or_input_path:be,disable:ke,enable:we,ok:ve,back:Se,have_account:Ce,go_login:Pe,close:xe,no_support_now:Ae,empty_input:Re},Te={name:"Name",size:"Size",modified:"Modified"},De={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",install:"Install",installing:"Installing","tr-install":"TrollStore","tr-installing":"TrollStore Installing"},Oe={list:"List View",grid:"Grid View",image:"Image View"},ze="No images in the current folder",Fe="Load more",Le="No more",Be="Please input password",Me={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings",recursive_move:"Recursive Move","recursive_move_directory-tips":"Are you sure you want to move all files in the current folder and its subfolders to the specified folder?",remove_empty_directory:"Remove Empty Folder","remove_empty_directory-tips":"Are you sure to delete all its empty subfolders?",regex_rename:"Regex Rename",regex_rename_preview:"Changed Files",regex_rename_preview_old_name:"Old Name",regex_rename_preview_new_name:"New Name",regular_rename:"Regular expression file renaming. Input the source file name regular expression on the first line, and input the new file name regular expression on the second line."},Ne={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},je={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory"},Ee={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},Ie={powered_by:"Powered by AList",manage:"Manage"},qe={search:"Search",no_result:"No result yet"},Ve="Failed fetching settings: ",Ge="Failed get current user: ",Ye={obj:Te,preview:De,layouts:Oe,no_images:ze,load_more:Fe,no_more:Le,input_password:Be,toolbar:Me,upload:Ne,local_settings:je,package_download:Ee,footer:Ie,search:qe,fetching_settings_failed:Ve,get_current_user_failed:Ge,"Loading storage, please wait":"Loading storage, please wait"},Qe="Search index",We="Current indexes",He="Build indexes",$e="Rebuild indexes",Ke="Paths to update",Je="Max depth",Xe="Update indexes",Ze="Object count",eo="Last done time",oo="Unknown",to="Stop",so="Clear",ro="Error",io={search_index:Qe,current:We,build:He,rebuild:$e,paths_to_update:Ke,max_depth:Je,update:Xe,obj_count:Ze,last_done_time:eo,unknown:oo,stop:to,clear:so,error:ro},no="Login to the",ao="Remember me",co="Forget password?",lo="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",_o="Clear",po="Login",uo="Browse as a guest",ho="Login successfully",mo={login_to:no,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:ao,forget:co,forget_url:lo,clear:_o,login:po,use_guest:uo,success:ho},fo={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",aria2:"Aria2",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",sso:"Single Sign-on",qbit:"qBittorrent",docs:"Documentation"},go="AList Manage",yo="You are not admin user, please login with admin account.",bo="Logout successfully",ko="Send",wo="Receive",vo="Received messages",So={sidemenu:fo,title:go,not_admin:yo,logout_success:bo,send:ko,receive:wo,received_msgs:vo,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},Co="Path",Po="Password",xo="Write",Ao="Hide",Ro="Readme",Uo="Apply to sub folder",To="One regular expression per line",Do="Support markdown content or markdown link",Oo={path:Co,password:Po,write:xo,hide:Ao,readme:Ro,apply_sub:Uo,hide_help:To,readme_help:Do},zo="Allow indexed",Fo="Allow mounted",Lo="Announcement",Bo="Aria2 secret",Mo="Aria2 uri",No="Audio autoplay",jo="Audio cover",Eo="Audio types",Io="Auto update index",qo="Customize body",Vo="Customize head",Go="Default page size",Yo="External previews",Qo="Favicon",Wo="Filename char mapping",Ho="Forward direct link params",$o="Hide files",Ko="Home container",Jo={hope_container:"Hope container",max_980px:"Max 980px"},Xo="Home icon",Zo="Iframe previews",et="Ignore paths",ot="Image types",tt="Index progress",st="Link expiration",rt="Logo",it="Main color",nt="Max index depth",at="Ocr api",dt="Package download",ct="Pagination type",lt={all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},_t="Privacy regs",pt="Proxy ignore headers",ut="Proxy types",ht="Qbittorrent seedtime",mt="Qbittorrent url",ft="Robots txt",gt="Search index",yt={bleve:"Bleve",database:"Database",database_non_full_text:"Database non full text",none:"None"},bt="Settings layout",kt={list:"List",responsive:"Responsive"},wt="Sign all",vt="Site title",St="Sso application name",Ct="Sso client id",Pt="Sso client secret",xt="Sso endpoint name",At="Sso jwt public key",Rt="Sso login enabled",Ut="Sso login platform",Tt={Casdoor:"Casdoor",Dingtalk:"Dingtalk",Github:"Github",Google:"Google",Microsoft:"Microsoft"},Dt="Sso organization name",Ot="Text types",zt="Token",Ft="Version",Lt="Video autoplay",Bt="Video types",Mt={allow_indexed:zo,allow_mounted:Fo,announcement:Lo,aria2_secret:Bo,aria2_uri:Mo,audio_autoplay:No,audio_cover:jo,audio_types:Eo,auto_update_index:Io,customize_body:qo,customize_head:Vo,default_page_size:Go,external_previews:Yo,favicon:Qo,filename_char_mapping:Wo,forward_direct_link_params:Ho,hide_files:$o,home_container:Ko,home_containers:Jo,home_icon:Xo,iframe_previews:Zo,ignore_paths:et,"ignore_paths-tips":"one path per line",image_types:ot,index_progress:tt,link_expiration:st,logo:rt,main_color:it,max_index_depth:nt,"max_index_depth-tips":"max depth of index",ocr_api:at,package_download:dt,pagination_type:ct,pagination_types:lt,privacy_regs:_t,proxy_ignore_headers:pt,proxy_types:ut,qbittorrent_seedtime:ht,qbittorrent_url:mt,robots_txt:ft,search_index:gt,search_indexs:yt,settings_layout:bt,settings_layouts:kt,sign_all:wt,site_title:vt,sso_application_name:St,sso_client_id:Ct,sso_client_secret:Pt,sso_endpoint_name:xt,sso_jwt_public_key:At,sso_login_enabled:Rt,sso_login_platform:Ut,sso_login_platforms:Tt,sso_organization_name:Dt,text_types:Ot,token:zt,version:Ft,video_autoplay:Lt,video_types:Bt},Nt="Aria2",jt="Aria2 Version:",Et="Set aria2",It="Copy Token",qt="Reset Token",Vt="Reset Token Successfully",Gt="Unknown type",Yt="Set qBittorrent",Qt="qBittorrent",Wt={aria2:Nt,aria2_version:jt,set_aria2:Et,copy_token:It,reset_token:qt,reset_token_success:Vt,unknown_type:Gt,set_qbit:Yt,qbittorrent:Qt},Ht={mount_path:"Mount Path","mount_path-tips":"The path you want to mount to, it is unique and cannot be repeated",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"},enable_sign:"Enable sign"},$t={start_load_success:"Start loading",load_all:"Reload All",filter_by_driver:"Filter by driver"},Kt={common:Ht,other:$t},Jt="Download file to local machine",Xt="Transfer downloaded file to corresponding storage",Zt="Download file to local machine",es="Transfer downloaded file to corresponding storage",os="Upload file to corresponding storage",ts="Copy file from a storage to another storage",ss="Completed",rs="Running",is="Pending",ns="Running",as="Canceling",ds="Succeeded",cs="Canceled",ls="Errored",_s="Clear Succeeded",ps="Retry",us={aria2_down:Jt,aria2_transfer:Xt,qbit_down:Zt,qbit_transfer:es,upload:os,copy:ts,done:ss,undone:rs,pending:is,running:ns,canceling:as,succeeded:ds,canceled:cs,errored:ls,clear_succeeded:_s,retry:ps},hs={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},ms="Username",fs="Password",gs="Base path",ys="Role",bs="Permission",ks="Disabled",ws="Available",vs="Update Profile",Ss="Update profile successfully, please re-login.",Cs="Change Username",Ps="Change Password",xs="Enable 2FA",As="Cancel 2FA",Rs="Cancel 2FA successfully",Us="Scan the QR code to save the secret key",Ts="Input the code of your 2FA app",Ds="Verify",Os="So you cannot modify anything in the manage page.",zs="Single sign-on Login",Fs="Connect Single sign-on Platform",Ls="Disconnect Single sign-on Platform",Bs={permissions:hs,username:ms,password:fs,base_path:gs,role:ys,permission:bs,disabled:ks,available:ws,update_profile:vs,update_profile_success:Ss,change_username:Cs,change_password:Ps,"change_password-tips":"Keep the password empty if you don't want to change it",enable_2fa:xs,cancel_2fa:As,cancel_2fa_success:Rs,"2fa_already_enabled":"2FA is already enabled",scan_qr:Us,input_code:Ts,verify:Ds,"guest-tips":"You are currently visiting as a guest.",modify_nothing:Os,sso_login:zs,connect_sso:Fs,disconnect_sso:Ls},o=Object.assign({"./br.json":f,"./drivers.json":ee,"./global.json":Ue,"./home.json":Ye,"./index.json":s,"./indexes.json":io,"./login.json":mo,"./manage.json":So,"./metas.json":Oo,"./settings.json":Mt,"./settings_other.json":Wt,"./storages.json":Kt,"./tasks.json":us,"./users.json":Bs}),Ms={};for(const e in o){const t=e.split("/")[1].split(".")[0];Ms[t]=o[e]}export{Ms as default};
