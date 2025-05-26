import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Logos() {
    const containerStyles = {
        display: 'flex',
        justifyContent: 'space-around', // espacio entre elementos
        alignItems: 'center', // alineados verticalmente
        flexWrap: 'wrap', 
        backgroundColor: 'rgba(248, 248, 248, 0.41)', 
        marginTop: '0px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
        
    };

    const imageWrapperStyles = {

        margin: '15px', 
        flex: '0 0 auto', // no crecer, no encoger, base en auto
        maxWidth: '1000px', 
    };

    const imageStyles = {
        width: '100%', 
        maxHeight: '150px', 
        objectFit: 'contain', 
        marginBottom: '10px', 
    };

    const textStyle = {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#333',
    };

    return (
        <div style={containerStyles}>
            <div style={imageWrapperStyles}>
                <img src="/images/logos/envios.png" style={imageStyles} alt="Envíos a todo el país" />
            </div>

            <div style={imageWrapperStyles}>
                <img src="/images/logos/calidad.png" style={imageStyles} alt="Calidad garantizada" />
            </div>


            <div style={imageWrapperStyles}>
                <img src="/images/logos/pagos-online.png" style={imageStyles} alt="Pagos seguros online" />

            </div>

            <div style={imageWrapperStyles}>
                <img src="/images/logos/devoluciones.png" style={imageStyles} alt="Devoluciones sin cargo" />
        
            </div>
        </div>
    );
}