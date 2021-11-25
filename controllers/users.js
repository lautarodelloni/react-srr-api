
exports.listUsers = ( req, res ) => {
    const users = [
        {
            id: 1,
            name: 'James Rodriguez'
        },
        {
            id: 2,
            name: 'Julia Nadal'
        },
        {
            id: 3,
            name: 'Oscar Gonzalez'
        },
        {
            id: 4,
            name: 'Romina DeNarvaez'
        },
    ];
    res.status(200).json(users);
};

exports.listUsersDelay = ( req, res ) => {
    const users = [
        {
            id: 1,
            name: 'James Rodriguez'
        },
        {
            id: 2,
            name: 'Julia Nadal'
        },
        {
            id: 3,
            name: 'Oscar Gonzalez'
        },
        {
            id: 4,
            name: 'Romina DeNarvaez'
        },
    ];
    setTimeout(() => {
        res.status(200).json(users);
    }, 1500);
};
