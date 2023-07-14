var loginForm = document.forms.login;
var _name = loginForm.name;
var email = loginForm.email;
var password = loginForm.pass;
var password = loginForm.phone;
loginForm.onsubmit = function() {
    if (_name.value == '') {
        _name.classList.add('error');
        alert("bạn chưa nhập tên");
        return false;
    } else {
        _name.classList.remove('error');
    } 

    if (email.value == '') {
        email.classList.add('error');
        alert("bạn chưa nhập email");
        return false;
    } else {
        email.classList.remove('error');
    }
    if (phone.value == '') {
        phone.classList.add('error');
        alert("bạn chưa nhập số điện thoại");
        return false;
    } else {
        phone.classList.remove('error');
    }
    if (pass.value == '') {
        pass.classList.add('error');
        alert("bạn chưa nhập mật khẩu");
        return false;
    } else {
        pass.classList.remove('error');
    }
    alert("bạn đăng nhập thành công");
    // if (email.value == 'admin@gmail.com' && password.value == '123456') {
    //     alert('Đăng nhập thành công');
    //     return false;
    // } else {
    //     alert('Thông tin tài khoản không chính xác');
    //     return false;
    // }
}
