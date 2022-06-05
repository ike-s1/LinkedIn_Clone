import React from 'react';
import Notification from './Notification'



const Notifications = () => {
    const messages = [
        { name: 'UpWork', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto tenetur sunt ipsum totam nostrum a excepturi id.', daysAgo: 2,img:'https://itc.ua/wp-content/uploads/2022/03/upwork-symbol-600x400.png'},
        { name: 'Dou', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto tenetur sunt ipsum totam nostrum a excepturi id.', daysAgo: 4 , img:'https://pbs.twimg.com/profile_images/1499287899044515845/Dl2FcnZm_400x400.jpg'},
        { name: 'Google', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto tenetur sunt ipsum totam nostrum a excepturi id.', daysAgo: 5,img: 'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1'},
        { name: 'Git', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto tenetur sunt ipsum totam nostrum a excepturi id.', daysAgo: 7, img:'https://3.bp.blogspot.com/-Ktox3K4-xJo/Xu8CEgD_IuI/AAAAAAAAGb4/86j9WHu3M80DyJsPVXYFBS_6oGbxnvnGACLcBGAsYHQ/s640/git-logo.jpg'},
    ]
    
    return (
        <div>
            {
                messages.map(m =>  {
                    return <Notification name={m.name} text={m.text} daysAgo={m.daysAgo} img={m.img} />
                })
            }
        </div>
    );
};

export default Notifications;

