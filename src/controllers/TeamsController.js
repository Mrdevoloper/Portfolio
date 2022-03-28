const { read, write } = require('../utils/FS');

const UserGET = (_, res) => {
	const AllMails = read('info.json');
	res.render('index', { AllMails });
};

const UserPOST = (req, res) => {
	const { name, email } = req.body;

	const AllMails = read('info.json');

	AllMails.push({ id: AllMails.length + 1, name: name, year: email });

	write('info.json', AllMails);

	res.redirect('/api/v1');
};

module.exports = {
	UserGET,
	UserPOST,
};
