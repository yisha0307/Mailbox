# Mailbox
🌸🎉使用react+redux+webpack搭建的邮箱应用🎉🌸

DEMO: https://yisha0307.github.io/Mailbox/public/index.html    

记录：https://segmentfault.com/a/1190000008480601   
（文章中尚未更新表单验证、搜索邮件、thunk等后加的内容）  
###可添加修改：
####搜索邮件可改为忽略大小写(用正则）：
```
//maillist.jsx
const searchTextReg = new RegExp(searchText, 'i');
	const displayMails = displayMail.filter(mail => searchTextReg.test(mail.from)
				|| searchTextReg.test(mail.address)
				|| searchTextReg.test(mail.message)
				|| searchTextReg.test(mail.subject))
 ```
 
