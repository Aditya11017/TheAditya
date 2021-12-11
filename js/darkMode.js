const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  /*  var icon_color = document.getElementById('mi-cl');
    var icon_color = document.getElementById('mi-cl-1');
    var icon_color = document.getElementById('mi-cl-2');*/
    
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;

    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
  /*      var icon_color = document.getElementById('mi-cl');
        icon_color.classList.add('drk');
        icon_color.classList.remove('lit');
        var icon_color = document.getElementById('mi-cl-1');
        icon_color.classList.add('drk-1');
        icon_color.classList.remove('lit-1');
        var icon_color = document.getElementById('mi-cl-2');
        icon_color.classList.add('drk-2');
        icon_color.classList.remove('lit-2');
        var icon_color = document.getElementById('mi-cl-3');
        icon_color.classList.add('drk-3');
        icon_color.classList.remove('lit-3');
        var icon_color = document.getElementById('mi-cl-4');
        icon_color.classList.add('drk-4');
        icon_color.classList.remove('lit-4');
        var icon_color = document.getElementById('mi-cl-5');
        icon_color.classList.add('drk-5');
        icon_color.classList.remove('lit-5');
        var icon_color = document.getElementById('mi-cl-6');
        icon_color.classList.add('drk-6');
        icon_color.classList.remove('lit-6');*/
        var phone_img = document.getElementById("phone-img");
        phone_img.classList.add("img-hd-2-dark");
        phone_img.classList.remove("img-hd-2-white");
       

    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      /*  var icon_color = document.getElementById('mi-cl');
        icon_color.classList.add('lit');
        icon_color.classList.remove('drk');
        var icon_color = document.getElementById('mi-cl-1');
        icon_color.classList.add('lit-1');
        icon_color.classList.remove('drk-1');
        var icon_color = document.getElementById('mi-cl-2');
        icon_color.classList.add('lit-2');
        icon_color.classList.remove('drk-2');
        var icon_color = document.getElementById('mi-cl-3');
        icon_color.classList.add('lit-3');
        icon_color.classList.remove('drk-3');
        var icon_color = document.getElementById('mi-cl-4');
        icon_color.classList.add('lit-4');
        icon_color.classList.remove('drk-4');
        var icon_color = document.getElementById('mi-cl-5');
        icon_color.classList.add('lit-5');
        icon_color.classList.remove('drk-5');
        var icon_color = document.getElementById('mi-cl-6');
        icon_color.classList.add('lit-6');
        icon_color.classList.remove('drk-6');*/
        var phone_img = document.getElementById("phone-img");
        phone_img.classList.add("img-hd-2-white");
        phone_img.classList.remove("img-hd-2-dark");
     
       

    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

//Resources