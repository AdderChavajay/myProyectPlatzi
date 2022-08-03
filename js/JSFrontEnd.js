window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle('bg-sky-700', this.window.scrollY > 0 );
})