let XXXBaseYear = 1900;
let XXXBaseYearUtc = Date.UTC(XXXBaseYear, 0, 6, 2, 5);
let XXXBaseDate = new Date(XXXBaseYear, 0, 31)
let XXXLunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0]
let XXXMaxSupportYear = XXXBaseYear + XXXLunarInfo.length;

let XXXAnimals = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
let XXXTianGan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
let XXXDiZhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
let XXXUnits = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
let XXXTens = ['初', '十', '廿', '卅', '　'];
let XXXWeek = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

let XXXMillisecondsOfAYear = 31556925974.7;
let XXXSolarTerms = [
  {minutes: 0, term: "小寒"},
  {minutes: 21208, term: "大寒"},
  {minutes: 42467, term: "立春."},
  {minutes: 63836, term: "雨水"},
  {minutes: 85337, term: "惊蛰"},
  {minutes: 107014, term: "春分."},
  {minutes: 128867, term: "清明*"},
  {minutes: 150921, term: "谷雨"},
  {minutes: 173149, term: "立夏."},
  {minutes: 195551, term: "小满"},
  {minutes: 218072, term: "芒种"},
  {minutes: 240693, term: "夏至."},
  {minutes: 263343, term: "小暑"},
  {minutes: 285989, term: "大暑"},
  {minutes: 308563, term: "立秋."},
  {minutes: 331033, term: "处暑"},
  {minutes: 353350, term: "白露"},
  {minutes: 375494, term: "秋分."},
  {minutes: 397447, term: "寒露"},
  {minutes: 419210, term: "霜降"},
  {minutes: 440795, term: "立冬."},
  {minutes: 462224, term: "小雪"},
  {minutes: 483532, term: "大雪"},
  {minutes: 504758, term: "冬至."}
]
let XXXLunarFestivals = ["0101*春节", "0115 元宵节", "0505*端午节", "0707 七夕", "0815*中秋节", "0909 重阳节", "1208 腊八节", "1223 北小年", "1224 南小年", "1230*除夕"];
let XXXSolarFestivals = ["0101*元旦", "0214 情人节", "0308 妇女节", "0312 植树节", "0315 消费者权益日", "0401 愚人节", "0501*劳动节", "0504 青年节", "0601 儿童节", "0801 建军节", "0910 教师节", "1001*国庆节", "1225 圣诞节"]

class Lunar {
  constructor(_date) {
    this.date = _date;
    this.solarYear = _date.getFullYear();
    this.solarMonth = _date.getMonth();
    this.solarDay = _date.getDate();

    let date = new Date(this.solarYear, this.solarMonth, this.solarDay)
    if (this.solarDay >= 31) {
      date = new Date(this.solarYear, this.solarMonth + 1, 0)
    }

    let days = (date - XXXBaseDate) / 86400000;
    this.days = days + 40
    this.months = 1478; /*14*/

    let year,
      yearBegin = 2022/*XXXBaseYear*/,
      daysPast = 44561;
    for (year = yearBegin; year < XXXMaxSupportYear && days - daysPast > 0; year++) {
      daysPast += this.yearDays(year);
      this.months += 12;
    }
    days -= daysPast;
    if (days < 0) {
      days += this.yearDays(--year);
      this.months -= 12
    }
    this.year = year
    this.animal = XXXAnimals[(this.year - 4) % 12];

    this.years = year - 1864

    this.isLeap = false
    let _leapMonth = this.leapMonth(this.year), month = 1, temp = 0
    for (; month < 13 && days > 0; month++) {
      // 闰月
      if (_leapMonth > 0 && month === (_leapMonth + 1) && this.isLeap === false) {
        --month;
        this.isLeap = true;
        temp = this.leapDays(this.year);
      } else {
        temp = this.monthDays(this.year, month);
      }
      // reset
      if (this.isLeap === true && month === (_leapMonth + 1)) {
        this.isLeap = false;
      }
      days -= temp
      if (this.isLeap === false) {
        this.months++
      }
    }

    if (days === 0 && _leapMonth > 0 && month === _leapMonth + 1) {
      if (this.isLeap) {
        this.isLeap = false;
      } else {
        this.isLeap = true;
        --month;
        --this.months;
      }
    }

    if (days < 0) {
      days += temp;
      --month;
      --this.months;
    }
    this.month = month
    this.day = Math.round(days + 1); // TODO

    this.chineseYear = this.cyclical(this.year - XXXBaseYear + 36);
    switch (this.month) {
      case 1:
        this.chineseMonth = "正";
        break;
      case 10:
        this.chineseMonth = "十";
        break;
      case 11:
        this.chineseMonth = "冬";
        break;
      case 12:
        this.chineseMonth = "腊";
        break;
      default:
        this.chineseMonth = XXXUnits[this.month];
    }
    this.chineseMonth = (this.isLeap ? '闰' : '') + this.chineseMonth;
    switch (this.day) {
      case 10:
        this.chineseDay = '初十';
        break;
      case 20:
        this.chineseDay = '二十';
        break;
      case 30:
        this.chineseDay = '三十';
        break;
      default:
        this.chineseDay = XXXTens[Math.floor(this.day / 10)] + XXXUnits[this.day % 10];
    }
  }

  // 传入 offset 传回干支, 0=甲子
  cyclical(num) {
    return XXXTianGan[Math.floor(num % 10)] + XXXDiZhi[Math.floor(num % 12)]
  }

  // 传回农历 y年 的总天数
  yearDays(y) {
    let i, sum = 348, lunarYear = XXXLunarInfo[y - XXXBaseYear]
    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += (lunarYear & i) ? 1 : 0
    }
    return sum + this.leapDays(y)
  }

  // 传回农历 y年 闰月的天数
  leapDays(y) {
    if (this.leapMonth(y)) {
      return (XXXLunarInfo[y - XXXBaseYear] & 0x10000) ? 30 : 29
    } else {
      return 0
    }
  }

  // 传回农历 y年 闰哪个月 1-12 , 没闰传回 0
  leapMonth(y) {
    return XXXLunarInfo[y - XXXBaseYear] & 0xf
  }

  // 传回农历 y年m月 的总天数
  monthDays(y, m) {
    return (XXXLunarInfo[y - XXXBaseYear] & (0x10000 >> m)) ? 30 : 29
  }
}

function festivals(lunar) {
  let festivals = [];
  // 农历节日
  for (let i in XXXLunarFestivals) {
    if (/^(\d{2})(.{2})([\s*])(.+)$/.test(XXXLunarFestivals[i])) {
      if (Number(RegExp.$1) === lunar.month && Number(RegExp.$2) === lunar.day) {
        festivals.push({
          festival: RegExp.$4 + (RegExp.$3 === '*' ? '*' : ''),
          isLunar: true
        })
      }
    }
  }
  // 公历节日
  for (let i in XXXSolarFestivals) {
    if (/^(\d{2})(\d{2})([\s*])(.+)$/.test(XXXSolarFestivals[i])) {
      if (Number(RegExp.$1) === (lunar.solarMonth + 1) && Number(RegExp.$2) === lunar.solarDay) {
        festivals.push({
          festival: RegExp.$4 + (RegExp.$3 === '*' ? '*' : ''),
          isLunar: false
        })
      }
    }
  }

  // 节气
  let utc = XXXBaseYearUtc + XXXMillisecondsOfAYear * (lunar.solarYear - XXXBaseYear);
  [lunar.solarMonth * 2 + 1, lunar.solarMonth * 2].forEach(index => {
    let date = new Date(utc + XXXSolarTerms[index].minutes * 60 * 1000);
    if (date.getFullYear() === lunar.solarYear && date.getMonth() === lunar.solarMonth && date.getDate() === lunar.solarDay) {
      festivals.push({
        festival: XXXSolarTerms[index].term,
        isLunar: true
      });
    }
  })
  return festivals;
}


function formatDate(date) {
  let color = '#0000df'
  if (date.getDay() === 0 || date.getDay() === 6) {
    color = '#0c780c'
  }
  return `<span style="color: ${color};">${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日</span>`;
}

function weekday(date) {
  let color = '#ff0000'
  if (date.getDay() === 0 || date.getDay() === 6) {
    color = '#0c780c';
  }
  return `<span style="color: ${color};">${XXXWeek[date.getDay()]}</span>`;
}

function lunarDate(lunar) {
  return `${lunar.chineseYear}【${lunar.animal}】年<br>${lunar.cyclical(lunar.months)}月 ${lunar.cyclical(lunar.days++)}日`;
}

function lunarDate2(lunar) {
  return `${lunar.chineseMonth}月${lunar.chineseDay}`;
}

function getDate(date) {
  let lunar = new Lunar(date);

  let html = [];
  html.push(formatDate(date))
  html.push(weekday(date))
  html.push(`<span  style="color: violet; ">${lunarDate(lunar)}</span>`);
  html.push(`<span  style="color: #000066; ">${lunarDate2(lunar)}</span>`);
  let _festivals = festivals(lunar);
  if (_festivals.length > 0) {
    html.push(`<span style="background-color:#ccffcc; color=#000066" >${_festivals.map(value => value.festival).join(' ')}</span>`);
  }
  return html.join('<br>');
}
