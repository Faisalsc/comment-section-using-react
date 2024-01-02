import './App.css';
import Comments from './comments-section/commentSection';
// import Comments from './comments-section/testing';
const commentData =[
  {
      "userId": 165,
      "comId": "3122bca6-319e-4bfb-8c80-3a3fac8d0093",
      "fullName": "Mohammed Faisal, Dec 28, 2023 11:04 AM",
      "replies": [
          {
              "userId": 165,
              "comId": "5e44ee82-2364-4d14-b002-f245518ebbce",
              "fullName": "Mohammed Faisal, Dec 29, 2023 12:01 PM",
              "text": "<p>yes</p>",
              "replies": [{
                "userId": 170,
                "comId": "5e44ee82-2364-4d14-b002-b002",
                "fullName": "Mohammed Fazil, Dec 29, 2023 12:01 PM",
                "text": "<p>yes</p>",
                "replies": [],
                "avatarUrl": "https://ui-avatars.com/api/name=F Z&background=random"
            },],
              "avatarUrl": "https://ui-avatars.com/api/name=M F&background=random"
          },
      ],
      "text": "[Scenario A] <p>any one thr?</p>",
      "avatarUrl": "https://ui-avatars.com/api/name=M F&background=random"
  }
]
function editComment(data){
  console.log('editCOmment',data);
}
function onSubmitAction(data){
  console.log('onSubmitAction',data);
}
function deleteComment(data){
  console.log('deleteComment',data);
}
function App() {
  return (
    <Comments 
    commentData={commentData}
    currentUserId={165} 
    onEditAction={editComment.bind(this)}
    onReplyAction={onSubmitAction.bind(this)}
    onSubmitAction={onSubmitAction.bind(this)}
    onDeleteAction={deleteComment.bind(this)}
     />
  );
}

export default App;
