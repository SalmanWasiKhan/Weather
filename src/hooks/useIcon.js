function useIcon(iconId, iconw) {
  let icon;
  switch (iconId) {
    case 200 || 201 || 202 || 230 || 231 || 232:
      icon = "wi-storm-showers";
      break;

    case 210 || 211 || 212 || 221:
      icon = "wi-thunderstorm";
      break;

    case 300 || 301 || 302 || 310 || 311 | 312 || 313 || 314 || 321:
      icon = "wi-showers";
      break;

    case 500 || 501 || 502 || 503 || 504 || 520 || 521 || 522 || 531:
      icon = "wi-rain";
      break;

    case 511:
      icon = "wi-snowflake-cold";
      break;

    case 600 || 601 || 602 || 615 || 616 || 620 || 621 || 622:
      icon = "wi-snow-wind";
      break;

    case 611 || 612 || 613:
      icon = "wi-sleet";
      break;

    case 701 || 751:
      icon = "wi-fog";
      break;

    case 721 || 731 || 751 || 761 || 762:
      icon = "wi-dust";
      break;

    case 711:
      icon = "wi-smoke";
      break;

    case 771:
      icon = "wi-strong-wind";
      break;

    case 781:
      icon = "wi-tornado";
      break;

    case 800:
      iconw === "01d" ? (icon = "wi-day-sunny") : (icon = "wi-night-clear");
      break;

    case 801:
      iconw === "02d"
        ? (icon = "wi-day-cloudy")
        : (icon = "wi-night-alt-cloudy");
      break;

    case 802:
      icon = "wi-cloud";
      break;

    case 803 || 804:
      icon = "wi-cloudy";
      break;

    default:
      break;
  }

  const iconClasses = `wi ${icon} icon`;

  return iconClasses;
}

export default useIcon;
