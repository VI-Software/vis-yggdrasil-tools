const common = require('./../common');

/**
 * Gets Player name History
 * @async
 * @param {Object} player_string Player Object or a Uuid as a string
 * @returns {Promise<Object>} An Object containing names and the date they were set
 */
function getNameHistory(player_string) {
    return new Promise((resolve, reject) => {
        common.getUuid(player_string).then(uuid => {
            common
                .get(`https://authserver.visoftware.tech/account/users/profiles/${uuid}/names`)
                .then(data => {
                    data = JSON.parse(data);
                    data.forEach(e => {
                        if (typeof e.changedToAt !== 'undefined')
                            e.changedToAt = new Date(e.changedToAt);
                    });
                    resolve(data);
                })
                .catch(err => reject(err));
        });
    });
}

module.exports = {
    name: 'getNameHistory',
    process: getNameHistory
};
