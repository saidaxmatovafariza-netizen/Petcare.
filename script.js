const toast = document.getElementById("toast");
function show(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}
document.querySelectorAll(".heart").forEach(
  (b) =>
    (b.onclick = () => {
      b.textContent = b.textContent === "♥" ? "♡" : "♥";
      b.style.color = b.textContent === "♥" ? "#ff674c" : "#9aa3b2";
    }),
);
document.querySelectorAll(".type").forEach(
  (b) =>
    (b.onclick = () => {
      document
        .querySelectorAll(".type")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      show(b.textContent.trim() + " tanlandi");
    }),
);
document.querySelectorAll(".add").forEach(
  (b) =>
    (b.onclick = () => {
      let c = JSON.parse(localStorage.getItem("petcareCart") || "[]");
      let x = c.find((p) => p.name === b.dataset.name);
      if (x) x.qty++;
      else c.push({ name: b.dataset.name, price: +b.dataset.price, qty: 1 });
      localStorage.setItem("petcareCart", JSON.stringify(c));
      show("Savatga qo‘shildi ✓");
    }),
);
document
  .getElementById("notify")
  ?.addEventListener("click", () => show("Yangi bildirishnoma yo‘q"));
