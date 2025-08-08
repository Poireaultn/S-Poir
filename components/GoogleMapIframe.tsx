export default function GoogleMapIframe() {
  return (
    <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46096.16753200194!2d-1.03768533621368!3d43.772641479120544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd56a74407d041a5%3A0x406651748162e00!2s40990%20Saint-Vincent-de-Paul!5e0!3m2!1sfr!2sfr!4v1753439230423!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}