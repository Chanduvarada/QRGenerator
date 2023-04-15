const qrForm = document.getElementById("Formqr");
const qrImage= document.getElementById("qrImage");
const qrContainer = document.getElementById("qrContainer");
const qrInputText = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");

const renderQRCode = (url) => {
  if (!url) return;
  generateBtn.innerText = "Generating Qr Code...";
  qrImage.src = url;

  const onImageLoad = () => {
    const interval = setInterval(() => {
      qrContainer.classList.add("show");
      clearInterval(interval);
      generateBtn.innerText = "Genrate QR Code";
    }, 500);
  };

  qrImage.addEventListener("load", onImageLoad);
};

qrForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(qrForm);
  const text = formData.get("qrText");
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

  renderQRCode(qrCodeUrl);
});
qrInputText.addEventListener("keyup", () => {
  if (!qrInputText.value.trim()) {
    qrContainer.classList.remove("show");
  }
});