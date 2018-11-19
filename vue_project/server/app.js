const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));

let users = {
    toto: {
        username: 'toto',
        password: 'truc'
    }
};

let list = {};
list['sushi'] = [
    {
        productTitle: 'ABCN',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 1
    },
    {
        productTitle: 'KARMA',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 2
    }
];
list['maki'] = [
    {
        productTitle: 'ABCN',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 1
    },
    {
        productTitle: 'KARMA',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 2
    }
];
list['yakitori'] = [
    {
        productTitle: 'ABCN',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 1
    },
    {
        productTitle: 'KARMA',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 2
    }
];
list['desserts'] = [
    {
        productTitle: 'ABCN',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 1
    },
    {
        productTitle: 'KARMA',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 2
    }
];
list['menubrochettes'] = [
    {
        productTitle: 'ABCN',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 1
    },
    {
        productTitle: 'KARMA',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 2
    }
];
list['menumaki'] = [
    {
        productTitle: 'ABCN',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 1
    },
    {
        productTitle: 'KARMA',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 2
    }
];
list['menusushi'] = [
    {
        productTitle: 'ABCN',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 1
    },
    {
        productTitle: 'KARMA',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 2
    }
];
list['boissons'] = [
    {
        productTitle: 'ABCN',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 1
    },
    {
        productTitle: 'KARMA',
        productDescription:
            'Tempura crevette, avocat, oignons frits (8 pièces)',
        productPrice: '12,80€',
        productId: 2
    }
];

let orders = []

app.get('/api/list/:category', (req, res) => {
    //return all the products
    if (req.params && req.params.category) {
        res.json(list[req.params.category]);
        return;
    }
    res.status(400).send('Bad Request');
})

app.post('/api/purchase', (req, res) => {
    if (!req.body) {
        res.status(400).send('Bad request');
        return;
    }

    if (!req.body.cart) {
        res.status(400).send('Donnée du panier manquante');
        return;
    }

    var order = {
        id: orders.length+1,
        cart: req.body.cart
    };

    orders.push(order);
    
    res.send("Ok");
})

app.post('/api/connexion', (req, res) => {
    if (!req.body) {
        res.status(400).send("Bad request");
        return;
    }

    const user = req.body.user;
    if (!user) {
        res.status(400).send("Bad request");
        return;
    }

    if (!user.username || !user.password) {
        res.status("400").send("Bad request");
        return;
    }

    let logUser = Object.assign({}, users[user.username]);
    if (logUser.username === user.username && logUser.password === user.password) {
        delete logUser.password;
        res.json(logUser);
        return;
    }

    res.status(401).send('Bad credentials');
})

app.post('/api/subscribe', (req, res) => {
    if (!req.body) {
        res.status(400).send("Bad request");
        return;
    }

    const user = req.body.user;
    if (!user) {
        res.status(400).send("Bad request");
        return;
    }

    if (!user.username || !user.password) {
        res.status("400").send("Bad request");
        return;
    }

    if (users[user.username]) {
        res.status("400").send("User already exists");
        return;
    }
    users[user.username] = user;

    res.send('ok');
})


app.listen(3000, () => console.log("Listening on port 3000!"));