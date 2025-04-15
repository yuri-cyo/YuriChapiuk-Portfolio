export class Modal {
  constructor(options){
    this.$modal = document.getElementById(options.idModal);
    this.modalSelector = options.idModal;
    this.$btnOpenModal = document.getElementById(options.idBtnOpenModal);
    this.btnOpenModalSelector = options.idBtnOpenModal;
    this.$btnCloseModal = this.$modal.querySelector('.modal__btn-close');
    this.delCloseSelector = document.getElementById(options.delCloseId)
  }

  open() {
    if (this.$btnOpenModal) {
      this.$modal.style.display = 'flex';
      this.$modal.classList.remove('modal-close')
      this.$modal.classList.add('modal-open')
      document.body.classList.add('_lock') //! block scroll-x on body
      
    }
  }
  close() {
    if (this.$btnCloseModal) {
      // this.$modal.style.display = 'none';
      this.$modal.classList.add('modal-close')
      this.$modal.classList.remove('modal-open')

      // setTimeout(() => {
      //   e.target.style.display = 'none';
      // }, 300)

      this.$modal.addEventListener('animationend', (e)=>{
        if (e.animationName === 'modalClose') {
          e.target.style.display = 'none';
        }
      }, { once: true });
      
      document.body.classList.remove('_lock') //! block scroll-x on body
    }
    if (this.delCloseSelector) {
      this.delCloseSelector.remove()
    }
  }

  click() {
    document.body.addEventListener('click',(e)=> {
      const target = e.target
      if (target.closest('#'+ this.btnOpenModalSelector)) {
        this.open()
      }
      if (target.closest('.modal__btn-close')) {
        
        this.close()
      }
      if (target.closest('#'+ this.modalSelector)) {
        if (!target.closest('.modal__box')) {
          this.close()

        }
      }
    })
  }

  run() {
    this.click()
  }
}