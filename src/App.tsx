import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col w-full h-full border">
        <div>login</div>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <input type="text" placeholder="verify you not a robot" />
      </div>
    </>
  );
}

//Git

// git init: Start git trong repo
// git add: Thêm code đã sửa hoặc tạo mới vào trong stagging // git add .
// git commit: Đưa ra message về code đã sửa gì, ... // git commit -m 'message'
// git remote: Remote tới repo mà chúng ta đang làm việc //git remote add origin 'URL'
// git branch: Tạo nhánh làm việc // git branch -M main
// git push: đẩy code lên github // git push -u origin main // git push

// update code
// git add .
// git commit -m 'message'
// git push

export default App;
