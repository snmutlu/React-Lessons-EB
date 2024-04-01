//? API Nedir? 

/* 
API bizim uygulamamız ile database'imiz arasında 
veri alışverişi yaptığımız bir köprü olarak düşünebiliriz.
API'lar kendi içerisinde de ikiye ayrılıyor.
1-Rest API
2-Soap API

Soap xml tabanlı çalıştığı için yavaş ve configuration'u
zor bir yapı. Bu yüzden daha çok Rest API'lar kullanılıyor.

Rest API'lar ise json formatında çalıştığı için
daha hızlı ve kullanışlı. 


Bizler uygulamamız ile API'lar arasında iletişimi 
sağlamak için de 3 Farklı yöntemden faydalanabiliriz.

1-XMLHttpRequest
2-Fetch API
3-Axios

1-XMLHttpRequest : Çok eski ve kullanımı zor bir yöntemdir.
Artık projelerde kullanılmıyor.

2-Fetch API : Window objesi içerisinde tanımlanmış bir
function'dur bu function'u kullanarak promise yapıları
ile biz Apı'larımıza isteklerimizi gönderebilir
ve than - catch gibi yapılarla gelen response'larımızı
yakalayabiliriz. Bu yönten de günümüzde çok fazla
kullanılmıyor. Artık projelerde daha çok Axios kullanılıyor.

3-Axios : React projelerinde rest servislere istek atılırken
en çok kullanılan yöntemdir.*/