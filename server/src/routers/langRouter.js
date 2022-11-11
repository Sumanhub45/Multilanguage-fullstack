const express = require('express');
const router = new express.Router();
const Language = require('../models/language');

// // to render dynamic page
router.get('/', (req, res) => {
    res.render('index',{ 
        name:"home"
    })
})


// // to render dynamic page
router.get('/about', (req, res) => {
    res.render('about',{ 
        name:"about"
    })
})

router.get('/contact', (req, res) => {
    res.render('contactus',{ 
        name:"contact"
    })
})

router.get('/service', (req, res) => {
    res.render('service',{ 
        name:"service"
    })
})

// GET /api/languages
router.get('/languages', async(req, res) => {
    try {
        const education = await Language.find();
        res.json(education);
    } catch (err) {
        res.json({ message: err });
    }
} );

// POST /api/languages
router.post('/languages', async(req, res) => {
    const language = new Language(req.body);
    try {
        const newLanguage = await language.save();
        res.status(201).json(newLanguage);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});



// GET /api/languages/:id
router.get('/languages/:id', async(req, res) => {
    try {
        const language = await Language.findById(req.params.id);
        res.json(language);
    } catch (err) {
        res.json({ message: err });
    }
});

// DELETE /api/languages/:id
router.delete('/languages/:id', async(req, res) => {
    try {
        const language = await Language.findByIdAndDelete(req.params.id);
        res.json(language);
    } catch (err) {
        res.json({ message: err });
    }
});



// PATCH /api/languages/:id
router.patch('/languages/:id', async(req, res) => {
    try {
        const language = await Language.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(language);
    } catch (err) {
        res.json({ message: err });
    }
});

// PUT /api/languages/:id
router.put('/languages/:id', async(req, res) => {
    try {
        const language = await Language.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(language);
    } catch (err) {
        res.json({ message: err });
    }
});

// GET /api/languages/lang/:lang
router.get('/languages/lang/:lang', async(req, res) => {
    try {
        const language = await Language.find({ lang: req.params.lang });
        res.json(language);
    } catch (err) {
        res.json({ message: err });
    }
});

// DELETE /api/languages/lang/:lang
router.delete('/languages/lang/:lang', async(req, res) => {
    try {
        const language = await Language.deleteMany({ lang: req.params.lang });
        res.json(language);
    } catch (err) {
        res.json({ message: err });
    }
});

// PATCH /api/languages/lang/:lang
router.patch('/languages/lang/:lang', async(req, res) => {
    try {
        const language = await Language.updateMany({ lang: req.params.lang }, req.body, { new: true });
        res.json(language);
    } catch (err) {
        res.json({ message: err });
    }
});

// PUT /api/languages/lang/:lang
router.put('/languages/lang/:lang', async(req, res) => {
    try {
        const language = await Language.updateMany({ lang: req.params.lang }, req.body, { new: true });
        res.json(language);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;