# Typescript-dev-

Çözülen Sorular

Soru 1: Jenerik Dizi BirleşCrme mergeArrays fonksiyonunu, iki farklı Bpte diziyi alıp tek bir
dizide birleşBrecek şekilde implemente edin.


Soru 2: Tip Koruyucuları (Type Guards) Car ve Truck sınıflarını ve Vehicle Bpini kullanarak,
useVehicle fonksiyonunu if bloğu içinde Bp koruyucusu (in operatörü) kullanacak şekilde
implemente edin.


Soru 3: Sınıf ve Erişim Belirleyiciler Logger sınıSnı implemente edin. logHistory dizisi
private olmalı ve dışarıdan erişilememelidir.


Soru 4: keyof ile Jenerik Fonksiyon Bir nesne ve o nesnenin bir anahtarını alan getProperty
fonksiyonunu implemente edin.


Soru 5: Fonksiyon Aşırı Yüklemesi (Overloading) Verilen users dizisini kullanarak, ID ile
çağrıldığında tek bir kullanıcı, isimle çağrıldığında bir kullanıcı dizisi döndüren search
fonksiyonunu implemente edin.


Soru 6: Jenerik Sınıf Implementasyonu Bir MemoryCache sınıS implemente edin. set ile veri
eklemeli, get ile çekmeli ve clear ile temizlemelidir.


Soru 7: Partial ile Güncelleme Fonksiyonu updateUser fonksiyonunu, Partial<User>
kullanarak mevcut bir kullanıcıyı güncelleyecek ve Readonly<User> olarak döndürecek
şekilde implemente edin.


Soru 8: Rest Parametreleri Aldığı tüm sayısal parametreleri toplayan sum fonksiyonunu "rest
parameters" kullanarak implemente edin.


Soru 9: Soyut Sınıf (Abstract Class) getArea adında soyut bir metoda sahip Shape sınıSnı ve
ondan türeyen Circle sınıSnı implemente edin. Circle alanı π×r2 olmalıdır.


Soru 10: StaCk Özellikler ve Metotlar MathHelper sınıSna staBk PI (3.14159) özelliğini ve
staBk calculateCircumference (Çevre = 2×π×r) metodunu ekleyin.


Soru 11: Koşullu Tipler (CondiConal Types) UnwrapPromise<T> Bpini tanımlayın. Eğer T bir
Promise ise içindeki Bpi, değilse T'nin kendisini döndürmelidir.
İpucu: Burada tek sa1r içinde bir if-else kontrolü durumu var.


Soru 12: infer ile Fonksiyon Dönüş Tipi TypeScript'in ReturnType<T> Bpini
GetReturnType<T> olarak kendiniz yazın.


Soru 13: Mapped Types ve Template Literals CreateGetters<T> Bpini tanımlayın. id:
number özelliğini getId: () => number metoduna dönüştürmelidir.


Soru 14: Rekürsif Tipler (Recursive Types) Readonly<T> sadece ilk seviyeyi salt okunur yapar.
DeepReadonly<T> Bpini, iç içe nesneleri de readonly yapacak şekilde tanımlayın.


Soru 15: Mapped Types ile Filtreleme PickByValueType<T, V> Bpini tanımlayın. Bir nesne
(T) içinden, değeri (V) Bpine uyan özellikleri seçmelidir.


Soru 16: Nominal Tipleme (Branded Types) UserID ve PostID Bplerini (Brand<T, U>
kullanarak) tanımlayın. İkisi de string olmalı ama birbirine atanamamalıdır.


Soru 17: Dağı`lmış Koşullu Tipler (DistribuCve CondiConals) FilterUnion<T, U> Bpini
tanımlayın. Bir Union (T) içinden, U'ya atanabilen Bpleri çıkarmalıdır.


Soru 18: infer ile Fonksiyon Parametresi LastParameter<T> Bpini tanımlayın. Bir
fonksiyonun son parametresinin Bpini döndürmelidir.


Soru 19: infer ile Dizi Elemanı Tipi Flatten<T> Bpini tanımlayın. T bir dizi ise eleman Bpini
(T[] -> T), değilse T'yi döndürmelidir.


Soru 20: Template Literal Parsing (Rekürsif) Bu en zor sorulardan biridir.
ParseRouteParams<T> Bpini tanımlayın. /users/:id gibi bir string alıp { id: string }
gibi bir nesne Bpine dönüştürmelidir.
