function copyJazzCashNumber() {
  const num = '03274774506';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(num);
  } else {
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = num;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }

  const btnText = document.getElementById('copyBtnText');
  if (btnText) {
    btnText.textContent = 'Copied!';
    setTimeout(() => { btnText.textContent = 'Copy Number'; }, 2000);
  }
}

function updatePriceAndSelection() {
  const selectedWeight = document.querySelector('input[name="weightOption"]:checked');
  const price = selectedWeight?.getAttribute('data-price') || '1000';
  const total = document.getElementById('displayTotalPrice');
  if (total) {
    total.textContent = `Rs. ${parseInt(price).toLocaleString()}`;
  }
}

function sendWhatsAppOrder() {
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const city = document.getElementById('custCity').value.trim();
  const address = document.getElementById('custAddress').value.trim();

  const selectedWeight = document.querySelector('input[name="weightOption"]:checked');
  const weightVal = selectedWeight ? selectedWeight.value : '500 Grams';
  const priceVal = selectedWeight ? selectedWeight.getAttribute('data-price') : '1000';

  if (!name || !phone || !city || !address) {
    alert('Meharbani karke tamam details (Naam, Phone, Shehar, Address) pur karein!');
    return;
  }

  const whatsappNumber = '923274774506';
  const message = `*--- NEW ORDER: TATLIZA SWEETS ---* %0A%0A` +
    `*Item:* Special Milk Barfi %0A` +
    `*Packing:* ${weightVal} %0A` +
    `*Total Price:* Rs. ${priceVal} %0A%0A` +
    `*--- CUSTOMER DETAILS ---* %0A` +
    `*Name:* ${encodeURIComponent(name)} %0A` +
    `*Phone:* ${encodeURIComponent(phone)} %0A` +
    `*City:* ${encodeURIComponent(city)} %0A` +
    `*Address:* ${encodeURIComponent(address)} %0A%0A` +
    `*--- PAYMENT DETAILS ---* %0A` +
    `*Payment Method:* Online Advance (JazzCash) %0A` +
    `*Status:* Payment screenshot bhej raha/rahi hu. Order confirm kardein!`;

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

window.addEventListener('DOMContentLoaded', () => {
  updatePriceAndSelection();
});
