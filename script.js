function openModal(element) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

  const imgSrc = element.querySelector('img').src;
  const title = element.getAttribute('data-title');
  const desc = element.getAttribute('data-desc');

  modalImg.src = imgSrc;
  modalTitle.textContent = title;
  modalDesc.textContent = desc;

  modal.classList.add('active');
}

function closeModal(event) {
  if (event.target.id === 'imageModal') {
    forceCloseModal();
  }
}

function forceCloseModal() {
  document.getElementById('imageModal').classList.remove('active');
}

// Tutup modal dengan tombol ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    forceCloseModal();
  }
});
