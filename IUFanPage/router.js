module.exports = function(app, fs, multer, axios, async) {

    const upload = multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, __dirname);
            },
            filename: (req, file, cb) => {
                cb(null, file.fieldname);
            }
        })
    });
    
    
    app.get("/", function(req, res){
        console.log(req);
        res.end("true");
    });

    
    app.get("/test", function(req, res){
        res.render("test.html");
    });

    app.get("/IUFanPage", function(req, res){
        res.render("index.html");
    });

    app.get("/IUFanPage/Information", function(req, res){
        res.render("Information.html");
    });

    app.get("/IUFanPage/Music", function(req, res){
        res.render("Music.html");
    });

    app.get("/IUFanPage/Profile", function(req, res){
        res.render("Profile.html");
    });
}
