var familyMembers = [{
    'name': 'Rick Overall',
    'age': '58',
    'relation': 'Dad'
}, {
    'name': 'Kellie Overall',
    'age': '56',
    'relation': 'Mother'
}, {
    'name': 'Jayson Overall',
    'age': '36',
    'relation': 'Brother'
}, {
    'name': 'LJ Overall',
    'age': '34',
    'relation': 'Brother'
}, {
    'name': 'Matt Overall',
    'age': '31',
    'relation': 'Brother'
}, {
    'name': 'Kurt Overall',
    'age': '26',
    'relation': 'Brother'
}];

var friends = [{
    'name': 'Clark Peterson',
    'age': '28',
    'met': 'Grew up together'
}, {
    'name': 'Jennifer Siepert',
    'age': '26',
    'met': 'Met in highschool'
}, {
    'name': 'Kyle Hyer',
    'age': '28',
    'met': "Wife's brother"
}];

var hobbies = ['Coding', 'Board Games', 'Camping', 'Snowboarding'];

var me = {
    'name': 'Jake Overall',
    'height': '5\' 8"',
    'age': '28',
    'favoriteMovie': 'All The Movies',
    'favoriteBook': 'Rangers Apprentice',
    'favoriteArtist': 'GreenDay',
    'favoriteFood': 'Pizza'
};


module.exports = {
    getFriends: function () {
        return friends;
    },
    addFriend: function (friend) {
        friends.push(friend);
    },
    getFamily: function() {
        return familyMembers;
    },
    addFamily: function(person) {
        familyMembers.push(person);
    },
    getMe: function() {
        return me;
    },
    getHobbies: function() {
        return hobbies;
    },
    addHobby: function(hobby) {
        hobbies.push(hobby);
    }
};