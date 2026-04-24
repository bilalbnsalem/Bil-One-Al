let selectedColor = "أبيض (Blanc)";
let selectedSize = "L";

function selectColor(colorName, imgSrc, element) {
    selectedColor = colorName;
    document.getElementById('main-img').src = imgSrc;
    
    // تغيير التحديد البصري
    let items = document.querySelectorAll('.color-item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

function selectSize(size, element) {
    selectedSize = size;
    let items = document.querySelectorAll('.size-item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

function checkout() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const state = document.getElementById('cust-state').value;
    const address = document.getElementById('cust-address').value;

    if (!name || !phone) {
        alert("يرجى إدخال الاسم ورقم الهاتف لإتمام الطلب");
        return;
    }

    const myNumber = "21694622377"; // رقمك تم تحديثه هنا
    
    // تنسيق رسالة الواتساب الاحترافية
    const message = `*طلب جديد من متجر Bil-One-Al*%0A` +
                    `-----------------------------%0A` +
                    `*المنتج:* pull homme uni 119%0A` +
                    `*اللون:* ${selectedColor}%0A` +
                    `*المقاس:* ${selectedSize}%0A` +
                    `-----------------------------%0A` +
                    `*بيانات الزبون:*%0A` +
                    `*الاسم:* ${name}%0A` +
                    `*الهاتف:* ${phone}%0A` +
                    `*الولاية:* ${state}%0A` +
                    `*العنوان:* ${address}%0A` +
                    `-----------------------------%0A` +
                    `*المبلغ الجملي:* 38 DT`;

    const whatsappURL = `https://wa.me/${myNumber}?text=${message}`;
    
    // فتح الواتساب
    window.open(whatsappURL, '_blank');
      }
