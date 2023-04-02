

export class Kullanici {
  id: number |undefined;
  kullaniciAdi: string = "";
  kullaniciSifre: string = "";
  adi: string = "";
  soyadi:string = "";

  unvani:string = "";
  ePosta:string = "";
  telefon:string = "";
  sonGiris:Date |undefined;
  kayitYapanKullanici:number|undefined;
  kayitTarihi:Date |undefined;
  guncellemeYapanKullanici:number|undefined;
  guncellemeTarihi:Date |undefined;
  sifreDegistirmeDurumu:number|undefined;
  sifreGecerlilikTarihi:Date |undefined;
  hataliGirisSayisi:number|undefined;
  dn:string = "";
  tckn:string = "";
  ustBirimId:number|undefined;
  aktif:number|undefined;



  token: string = "";

}
