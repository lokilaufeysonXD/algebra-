import Link from "next/link";

const BottomSobreNosotros = () => {

    return (
        <Link  href={`/SobreMi`}  >
            <button>
                sobre nosotros
                <div class="arrow-wrapper">
                    <div class="arrow"></div>
                </div>
            </button>
        </Link>
    );

}

export default BottomSobreNosotros;