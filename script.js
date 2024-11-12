// دالة لتحديد خيار من القائمة المنسدلة
function selectElement(id, valueToSelect) {    
    let element = document.querySelector(id);
    if (element) {
        element.value = valueToSelect;
    }
}
// الاختيار
var value = '1'; // 1 = راضي جدا 
// 5 = غير راضي 

// تحديد عدد الأسئلة عبر جلب كل الصفوف في الجدول
const questionRows = document.querySelectorAll('#questions > tbody > tr');
// لوب لتعبئة واختيار جميع الاسئلة
for (let i = 2; i <= questionRows.length; i++) {
    selectElement(`#questions > tbody > tr:nth-child(${i}) > td:nth-child(2) > select`, value);
}

// تعبئة مربع الملاحظات في الاسفل
const commentInputs = document.querySelectorAll('#comments_input_id');
commentInputs.forEach(input => {
    input.value = 'لايوجد'; // 
});

// النقر على زر الإرسال
const submitButton = document.querySelector('body > div.pagebodydiv > form > p > input[type=submit]:nth-child(3)');
if (submitButton) {
    submitButton.click();
}
