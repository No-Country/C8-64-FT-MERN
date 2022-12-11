const {exportaBaseDatos} = require('../models/model');
const {modelUser} = require('../models/user')

module.exports = {
    //-------------------POSTS----------------------------------
    postBase: async (req, res) => {
        let data = new exportaBaseDatos({
            shablon_borrado: req.body.shablon_borrado,
            shablon_nuevo: req.body.shablon_nuevo,
            shablon_usado: req.body.shablon_usado,
            shablon_bajada: req.body.shablon_bajada,
            shablon_grabado: req.body.shablon_grabado,
            logo_claro: req.body.logo_claro,
            central_claro: req.body.central_claro,
            full_claro: req.body.full_claro,
            logo_oscuro: req.body.logo_oscuro,
            central_oscuro: req.body.central_oscuro,
            full_oscuro: req.body.full_oscuro,
            agua_fc: req.body.agua_fc,
            agua_fo: req.body.agua_fo,
            plastisol: req.body.plastisol,
            relieve: req.body.relieve,
            foil: req.body.foil,
            glitter: req.body.glitter,
            corrosion: req.body.corrosion,
            dyp: req.body.dyp
        })
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    },
    postcreateUser: async (req, res) => {
        let user = new modelUser ({
            idbase: req.body.idbase,
            user:req.body.user,
            password: req.body.password,
        })
        try {
            const userToSave = await user.save();
            res.status(200).json(userToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    },
    //-------------------FINAL POSTS----------------------------------

    //----------------------------PATCHS----------------------------------- 
    updateBase:  async (req, res) => {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const data = await exportaBaseDatos.findOneAndUpdate({_id:id},updatedData, { new: true });
            return res.status(200).json({ data });
        } catch (error) {
            console.log('ERROR: ', error);
            return res.status(400).json({ success: false });
        }
    },

    //------------------LOGGIN---------------------------------
    login: async (req, res) => {
        try {
            let usuarioEncontrado = await modelUser.findOne({user:req.query.user});
            if (usuarioEncontrado){
                let pwQuery = req.query.password;
                let pwUser = usuarioEncontrado.password;
                
                if (pwQuery == pwUser){
                    res.redirect(`/api/content/${usuarioEncontrado.idbase}`);
                }else{
                    res.send('error de contraseña')
                }
            }else{
                res.send('Usuario no encontrado');
            }
            
        } catch (error) {
            res.status(500);
        }      
    },
    getContent: async (req,res) => {
        try{
            let id = req.params.id;
            const data = await exportaBaseDatos.findOne({_id:id});
            res.json(data)
        } catch(error) {
            res.status(500); 
        }
    },  
    getUsers: async (req,res) => {
        try{
            const data = await modelUser.find();
            res.json(data)
        } catch(error) {
            res.status(500); 
        }
    },  
};