import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return(
        <> 
        <li>{marca} - {ano_lancamento}</li>
            
        </>
    )
}

Item.propsTypes = {
    marca: PropTypes.string.isRequired,
    ano_lacamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Falto a marca',
    ano_lancamento:0,

}

export default Item