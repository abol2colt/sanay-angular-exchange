# SANAY ANGULAR — BRANCH TODO ROADMAP

## Branch: `feat/foundation-layout-routing`

### Tasks

- Build main layout shell  
  چارچوب اصلی برنامه ساخته شود تا نوار بالا، بخش مرکزی و ساختار کلی صفحه از همان ابتدا یکدست باشد.

- Add application routes  
  مسیرهای اصلی برنامه برای خانه، بازار، دیده‌بان، دارایی و ورود تعریف شوند تا جابه‌جایی صفحه‌ها از ابتدا روشن و پایدار باشد.

- Add route fallback to home  
  اگر مسیر نامعتبر بود، کاربر به صفحه خانه برگردد تا مسیرهای شکسته تجربه کاربر را خراب نکنند.

- Build top navigation  
  نوار بالا با پیوندهای اصلی ساخته شود تا کاربر بتواند به‌سادگی بین بخش‌های مهم جابه‌جا شود.

- Add active navigation state  
  بخش فعال در نوار بالا مشخص شود تا کاربر همیشه بداند در کدام صفحه قرار دارد.

- Add theme toggle with local storage  
  تغییر حالت روشن و تیره ساخته شود و انتخاب کاربر ذخیره گردد تا در ورود بعدی همان حالت قبلی حفظ شود.

### Work Log

- [x] Branch started
- [x] Root app simplified to route tree rendering
- [x] Main layout shell created with navbar and page container
- [x] Child route structure added under main layout
- [x] Theme toggle added with local storage persistence
- [x] Fallback route redirected to home
- [x] Placeholder pages wired for home, market, watchlist, asset, and login

## Branch: `feat/core-models-and-store`

### Tasks

- Create domain models  
  مدل‌های اصلی داده برای دارایی، وضعیت اتصال، تاریخچه قیمت و دیگر داده‌های پایه ساخته شوند تا شکل داده در کل برنامه روشن و یکدست باشد.

- Build market store service  
  سرویس مرکزی داده بازار ساخته شود تا منبع اصلی داده‌ها در یک نقطه مشخص و امن نگه داشته شود.

- Add signal-based state  
  وضعیت‌های اصلی به صورت واکنشی نگه داشته شوند تا با تغییر داده، بخش دیداری برنامه نیز هماهنگ به‌روز شود.

- Add safe read methods  
  مسیرهای خواندن داده به شکل امن طراحی شوند تا هیچ بخشی به داده خام و حساس به صورت بی‌قاعده دسترسی نداشته باشد.

- Add search query state  
  وضعیت جستجو در سرویس مرکزی نگه داشته شود تا فیلتر بازار از یک نقطه واحد مدیریت شود.

- Add watchlist state  
  وضعیت دیده‌بان در سرویس مرکزی نگه داشته شود تا افزودن و حذف دارایی‌ها از یک مسیر روشن انجام شود.

- Add provider and connection state  
  منبع داده و وضعیت اتصال در سرویس مرکزی نگه داشته شوند تا همه بخش‌های برنامه برداشت یکسانی از وضعیت زنده داشته باشند.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/mock-data-loader`

### Tasks

- Add mock market dataset  
  داده اولیه بازار با همان دارایی‌های پروژه قبلی وارد شود تا پایه نمایش بازار از همان ابتدا آماده باشد.

- Build mock market data service  
  سرویس داده اولیه ساخته شود تا بارگذاری داده‌های آغازین از منطق صفحه‌ها جدا بماند.

- Hydrate initial market state  
  داده اولیه وارد سرویس مرکزی شود تا صفحه‌ها از همان منبع واحد استفاده کنند.

- Add price history hydration  
  اگر سابقه قیمت از قبل ذخیره شده بود، همان داده برای شروع دوباره خوانده شود تا تجربه کاربر پایدارتر بماند.

- Add watchlist hydration  
  اگر دیده‌بان از قبل ذخیره شده بود، در شروع برنامه دوباره بازیابی شود تا کاربر انتخاب‌های قبلی خود را از دست ندهد.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/home-page-shell`

### Tasks

- Build home page route  
  صفحه خانه به عنوان ورودی اصلی برنامه ساخته شود تا تجربه نخست کاربر از این بخش آغاز شود.

- Build hero section  
  بخش بالایی خانه با عنوان اصلی، متن توضیحی و دکمه‌های اصلی ساخته شود تا هویت محصول از ابتدا روشن باشد.

- Build features section  
  بخش معرفی قابلیت‌ها ساخته شود تا نکات اصلی محصول به شکل خلاصه و قابل فهم نمایش داده شوند.

- Build market preview section  
  بخش نمایش کوتاه بازار ساخته شود تا کاربر بدون ورود به صفحه بازار، چند دارایی مهم را ببیند.

- Add preview asset navigation  
  هر دارایی در پیش‌نمایش خانه به صفحه جزئیات خودش برود تا مسیر حرکت کاربر طبیعی و مستقیم باشد.

- Keep home lightweight  
  صفحه خانه ساده و سبک نگه داشته شود و از شلوغی و ریزه‌کاری زودهنگام دور بماند.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/shared-market-components`

### Tasks

- Build coin row component  
  ردیف هر دارایی به صورت یک بخش جدا ساخته شود تا نمایش داده‌ها در بازار و دیده‌بان یکپارچه و قابل استفاده دوباره باشد.

- Build coin list component  
  فهرست دارایی‌ها به صورت یک بخش جدا ساخته شود تا ترکیب ردیف‌ها در چند صفحه دوباره استفاده شود.

- Build empty state component  
  حالت خالی برای زمان نبود داده یا نداشتن نتیجه ساخته شود تا تجربه کاربر روشن و تمیز بماند.

- Build connection badge component  
  نشان وضعیت اتصال ساخته شود تا منبع داده و وضعیت زنده بودن به صورت روشن نمایش داده شود.

- Extract coin badge color mapping  
  رنگ هر دارایی از بدنه بخش دیداری جدا شود تا نگهداری و تغییر آن ساده‌تر باشد.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/market-page`

### Tasks

- Build market page shell  
  بدنه اصلی صفحه بازار ساخته شود تا جستجو، نشان اتصال و فهرست دارایی‌ها در آن قرار بگیرند.

- Add search input flow  
  جستجو به سرویس مرکزی وصل شود تا کاربر بتواند دارایی‌ها را سریع‌تر پیدا کند.

- Add filtered market view  
  داده‌های بازار بر اساس عبارت جستجو فیلتر شوند تا نمایش صفحه با ورودی کاربر هماهنگ باشد.

- Add empty search state  
  اگر نتیجه‌ای پیدا نشد، حالت خالی مناسب نمایش داده شود تا صفحه بی‌معنا و سردرگم‌کننده نباشد.

- Add asset row navigation  
  با کلیک روی هر ردیف، کاربر به صفحه جزئیات همان دارایی برود تا جریان حرکت محصول کامل شود.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/watchlist-page`

### Tasks

- Build watchlist page shell  
  صفحه دیده‌بان ساخته شود تا دارایی‌های ستاره‌خورده در یک بخش جدا نمایش داده شوند.

- Add watchlist filtering from store  
  داده‌های دیده‌بان از سرویس مرکزی خوانده شوند تا منبع داده یکتا باقی بماند.

- Add empty watchlist state  
  اگر کاربر هنوز چیزی به دیده‌بان اضافه نکرده بود، پیام مناسب نمایش داده شود.

- Add watchlist toggle flow  
  افزودن و حذف دارایی از دیده‌بان از همان مسیر مشترک و روشن مدیریت شود تا رفتار در همه صفحه‌ها یکسان باشد.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/asset-page`

### Tasks

- Build asset page shell  
  صفحه جزئیات دارایی ساخته شود تا اطلاعات اصلی هر دارایی در یک صفحه جدا نمایش داده شود.

- Add asset header details  
  نام، نماد، قیمت، تغییر روزانه و منبع داده در بالای صفحه نمایش داده شوند تا مهم‌ترین اطلاعات در نگاه اول دیده شوند.

- Add history panel  
  بخش نمایش سابقه قیمت ساخته شود تا کاربر دید کوتاهی از روند اخیر داشته باشد.

- Add summary info cards  
  کارت‌های اطلاعاتی برای زمان به‌روزرسانی، منبع داده و شمار سابقه ساخته شوند تا ساختار صفحه خواناتر شود.

- Add chart placeholder  
  جای نمودار به شکل تمیز و آماده گذاشته شود تا در مرحله بعدی بدون بازطراحی کلی، نمودار به آن وصل شود.

- Add trade entry point  
  دکمه ورود به بخش معامله نمایشی در صفحه جزئیات قرار بگیرد تا مسیر محصول کامل بماند.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/trading-modal`

### Tasks

- Build trading modal shell  
  بدنه پنجره معامله نمایشی ساخته شود تا کاربر بتواند تجربه نزدیک به صرافی واقعی را در همان صفحه داشته باشد.

- Add live price area  
  ناحیه نمایش قیمت لحظه‌ای داخل پنجره ساخته شود تا تغییرات داده بلافاصله دیده شوند.

- Add order form shell  
  بخش ورود قیمت و مقدار ساخته شود تا تجربه سفارش نمایشی کامل‌تر شود.

- Add total value calculation  
  ارزش تقریبی سفارش بر اساس قیمت و مقدار محاسبه و نمایش داده شود تا کاربر نتیجه ورودی خود را ببیند.

- Add live history panel  
  فهرست تغییرات زنده داخل پنجره ساخته شود تا جریان قیمت در همان پنجره قابل مشاهده باشد.

- Add trade journal mock panel  
  بخش سابقه معامله نمایشی ساخته شود تا پنجره از نظر محصولی کامل‌تر به نظر برسد.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/fake-live-flow`

### Tasks

- Build fake live price service  
  سرویس جریان زنده نمایشی ساخته شود تا بدون اتصال واقعی، رفتار زنده برنامه تمرین و آزمایش شود.

- Add connection state for fake flow  
  وضعیت اتصال برای جریان نمایشی نگه داشته شود تا رفتار رابط کاربر واقعی‌تر شود.

- Add start and stop control  
  آغاز و پایان جریان نمایشی به شکل روشن مدیریت شود تا از باز ماندن بیهوده زمان‌سنج جلوگیری شود.

- Update store from fake live flow  
  تغییرات قیمت نمایشی وارد سرویس مرکزی شوند تا همه صفحه‌ها از همان منبع واحد به‌روز شوند.

- Add lifecycle cleanup  
  هنگام خروج از صفحه، جریان نمایشی متوقف شود تا نشتی و چند اجرای هم‌زمان رخ ندهد.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/live-binance-adapter`

### Tasks

- Build binance live adapter  
  اتصال زنده بایننس به صورت یک بخش جدا ساخته شود تا دریافت داده از منطق محصول جدا بماند.

- Parse ticker messages  
  داده‌های دریافتی به شکل یکدست و قابل استفاده تبدیل شوند تا لایه‌های بالاتر با داده خام درگیر نشوند.

- Push parsed data into central flow  
  داده تبدیل‌شده وارد مسیر مرکزی به‌روزرسانی شود تا همه صفحه‌ها از یک جریان مشترک تغذیه شوند.

- Add connection event handling  
  وضعیت‌های آغاز، خطا و قطع شدن اتصال مدیریت شوند تا رفتار اتصال روشن و قابل پیگیری بماند.

- Add safe disconnect  
  بستن اتصال به شکل امن انجام شود تا از باز ماندن ناخواسته اتصال جلوگیری گردد.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/live-nobitex-fallback`

### Tasks

- Build nobitex live adapter  
  اتصال زنده نوبیتکس به صورت بخش جدا ساخته شود تا در صورت نیاز جایگزین منبع اول شود.

- Parse nobitex ticker payload  
  داده‌های دریافتی از این منبع به شکل یکدست تبدیل شوند تا مسیر بالادستی تفاوت منبع را احساس نکند.

- Add fallback trigger from primary source  
  اگر منبع اول در زمان مناسب آماده نشد یا شکست خورد، مسیر جایگزین فعال شود.

- Add connected-state handoff  
  اگر منبع جایگزین فعال شد، وضعیت اتصال و منبع داده در کل برنامه به شکل درست به‌روزرسانی شوند.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/fake-fallback-engine`

### Tasks

- Build fake fallback engine  
  اگر هیچ منبع زنده‌ای در دسترس نبود، موتور نمایشی فعال شود تا تجربه بازار کاملاً متوقف نشود.

- Add degraded mode state  
  وضعیت افت کیفیت اتصال نگه داشته شود تا رابط کاربر بتواند این وضعیت را شفاف نشان دهد.

- Route fake updates through central path  
  داده نمایشی از همان مسیر مرکزی عبور کند تا رفتار همه منبع‌ها یکدست بماند.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/connection-orchestration`

### Tasks

- Build central live orchestration service  
  سرویس مرکزی مدیریت اتصال ساخته شود تا تصمیم‌گیری درباره آغاز، جایگزینی و توقف منبع‌ها در یک نقطه جمع شود.

- Add primary to fallback chain  
  زنجیره جابه‌جایی بین منبع نخست، منبع جایگزین و موتور نمایشی ساخته شود تا تجربه بازار پایدارتر بماند.

- Add active connection ownership  
  مالک اتصال فعال در یک نقطه مشخص نگه داشته شود تا چند اتصال هم‌زمان و رفتار مبهم رخ ندهد.

- Add unified live ticker handler  
  همه داده‌های زنده از یک مسیر مشترک وارد به‌روزرسانی مرکزی شوند تا از پراکندگی رفتار جلوگیری شود.

- Add browser unload cleanup  
  هنگام خروج از برنامه، اتصال‌ها و زمان‌سنج‌ها جمع شوند تا چیزی باز و رها نماند.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `feat/login-shell`

### Tasks

- Build login page shell  
  بدنه صفحه ورود و ثبت‌نام ساخته شود تا ساختار محصول کامل باشد.

- Add form layout  
  چیدمان ورودی‌ها و دکمه اصلی ساخته شود تا مسیر ورود از نظر دیداری آماده باشد.

- Keep logic out for this phase  
  منطق واقعی ورود در این مرحله وارد نشود تا دامنه کار کنترل‌شده بماند و تمرکز روی ساختار اصلی باشد.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Branch: `chore/final-polish-and-docs`

### Tasks

- Add concise guidance comments  
  در بخش‌های مهم و غیر بدیهی، توضیح‌های کوتاه و آموزنده اضافه شوند تا پروژه بعداً نقش مرجع یادگیری را هم داشته باشد.

- Write project readme  
  توضیح روشن درباره ساختار، هدف و شیوه کار پروژه نوشته شود تا در آینده بازگشت به آن ساده باشد.

- Verify branch scopes  
  بررسی شود که هر برنچ فقط مسئول همان بخش خودش بوده و از محدوده تعریف‌شده خارج نشده باشد.

- Run final cleanup pass  
  نام‌گذاری، درون‌ریزی‌ها، ساختار فایل‌ها و بخش‌های تکراری یک بار نهایی بازبینی شوند.

### Work Log

- [ ] Branch started
- [ ]
- [ ]
- [ ]
- [ ]

## Working Principles

- Keep architecture component-first  
  ساختار برنامه باید از ابتدا بر پایه بخش‌های دیداری جدا و قابل استفاده دوباره پیش برود.

- Keep services as logic owners  
  منطق مشترک، داده زنده و تصمیم‌گیری‌های مهم باید در سرویس‌ها بمانند و از بخش دیداری جدا باشند.

- Keep state centralized and safe  
  داده‌های اصلی باید در یک نقطه روشن نگه داشته شوند و دسترسی به آن‌ها از مسیرهای کنترل‌شده انجام شود.

- Keep functions single-purpose  
  هر تابع باید تنها یک مسئولیت روشن داشته باشد تا فهم، آزمون و نگهداری آن ساده بماند.

- Keep modules encapsulated  
  هر بخش باید تا جای ممکن جزئیات درونی خود را پنهان نگه دارد و فقط آنچه لازم است در اختیار بخش‌های دیگر بگذارد.

- Prefer abstraction over repetition  
  هرجا الگوی مشخص و تکرارشونده شکل گرفت، باید به ساختار قابل استفاده دوباره تبدیل شود تا از تکرار بیهوده جلوگیری گردد.

- Respect clean code rules  
  نام‌گذاری باید روشن، کوتاه و دقیق باشد و کد باید تا جای ممکن خودش مفهوم را منتقل کند.

- Avoid raw state leaks  
  بخش‌های دیداری نباید بی‌حساب به داده خام و حساس دسترسی پیدا کنند و باید از مسیرهای خواندن امن استفاده شود.

- Keep live updates centralized  
  همه تغییرات زنده باید از یک مسیر مشترک عبور کنند تا رفتار بازار، پنجره معامله و صفحه دارایی با هم هماهنگ بمانند.

- Prefer maintainability over early polish  
  تا وقتی ساختار اصلی کامل نشده، نباید وقت پروژه صرف زرق‌وبرق و ریزه‌کاری زودهنگام شود.

- Keep branch scope strict  
  هر برنچ باید فقط یک هدف روشن داشته باشد و نباید چند مسئله متفاوت را با هم مخلوط کند.

- Document non-obvious decisions  
  تصمیم‌هایی که از ظاهر کد معلوم نیستند باید در جای مناسب ثبت شوند تا در آینده دلیل آن‌ها فراموش نشود.
