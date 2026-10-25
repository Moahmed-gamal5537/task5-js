1- DOM Selectors : (دى طريقه بتسمحلى انى اجيب عناصر او استدعى tags , class and iD) انواعها
       1- .getElementBy Id() => بحدد عنصر باستخدام id الخاص بيه
       2- .getElementByclassName() => بحدد عنصر باستخدام class الخاص بيه
       3- .getElementByTagName() => بحدد عنصر باستخدام tag , element الخاص بيه
       4- .getElementSelector() => بحدد اى عنصر سوا كان tag , class , id زى فى css كدا
       5- .getElementSelectorAll() => بحدد كل العناصر المطابقه فى الكود 

2- NodeList vs HTML Collection
    1- Nodelist => زى querySeletorsAll() مش بتقبل تحيث تلقائى  و اقدر استخدم معاها forEach loop 
    2- Html collection => زى .getElementByClassName() بتقبل التحديث عادى بس مش بقدر استخدم معاها forEach loop

3-removeAttribute => دى طريقه بتدينى صلاحيه انى امسح سمه من tag Html زى لو عايز مثلا احذف class , id او اى Attribute