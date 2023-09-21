setInterval(() => {

   d = new Date();
   htime=d.getHours();
   mtime=d.getMinutes();
   stime=d.getSeconds();
   hrotation=30*htime+mtime/2;
   mrotation=6*mtime;
   srotation=6*stime;


   hour.style.transform=`rotate(${hrotation}deg)`;  /*deg means degree*/
   minute.style.transform=`rotate(${mrotation}deg)`;
  second.style.transform=`rotate(${srotation}deg)`;
}, 1000);/*set interval means do it repeatedly in 1000milisec*/