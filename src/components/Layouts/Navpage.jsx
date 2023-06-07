import BottomSobreNosotros from '@/components/Bottom/BottomSobreNosotros';

const Navpage = () => {

  return (
    <>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <strong className='Logo'>ALGEBRA</strong>
          </a>
          <BottomSobreNosotros/>
          {/* <a href="personal/personal.php" class="btn btn-secondary">sobre nosotros</a> */}
        </div>
      </div>
    </>

  );

}

export default Navpage;
