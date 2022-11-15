const mongoose = require('mongoose');

//TIPO DE PRENDA: CLARA U OSCURA Y VALOR
const tipoPrenda = new mongoose.Schema({
    tipo: {
        required: true,
        type: String
    },
    valor: {
        required: true,
        type: Number
    }
})
//TIPO SHABLON : NUEVO O USADO Y VALOR
const tipoShablon = new mongoose.Schema({
    condicion: {
        required: true,
        type: String
    },
    valor: {
        required: true,
        type: Number
    }
})
//TIPO PINTURA : NOMBRE Y VALOR
const tipoPinturaClaro = new mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    valor: {
        required: true,
        type: Number
    }
})
const tipoPinturaOscuro = new mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    valor: {
        required: true,
        type: Number
    }
})






var exportaModeloTipoPrenda = mongoose.model('prendas', tipoPrenda,'prendas');
var exportaModeloTipoShablon = mongoose.model('shablon', tipoShablon,'shablon');
var exportaModeloTipoPinturaClaro = mongoose.model('pinturaClaro', tipoPinturaClaro,'pinturaClaro');
var exportaModeloTipoPinturaOscuro = mongoose.model('pinturaOscuro', tipoPinturaOscuro,'pinturaOscuro');


module.exports = { exportaModeloTipoPrenda, exportaModeloTipoShablon, exportaModeloTipoPinturaClaro, exportaModeloTipoPinturaOscuro}
