# SANAY ANGULAR — CORRECTED BRANCH TODO ROADMAP

## Current Branch Reality

- `feat/foundation-layout-routing`  
  این برنچ برای ساخت پایه برنامه بود و گزارش‌های مربوط به پوسته، مسیرها، نوار بالا، حالت روشن و تیره، اتصال تلوین و ایمن‌سازی کدهای مخصوص مرورگر باید فقط زیر همین برنچ باشد.

- `feat/core-models-and-store`  
  این برنچ برای مدل‌ها، سرویس مرکزی داده، وضعیت واکنشی و داده اولیه بازار بود. چون داده اولیه بازار در همین مرحله ساخته شده،

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

- Guard browser-only theme logic  
  دسترسی به حافظه مرورگر و سند صفحه فقط زمانی انجام شود که برنامه واقعاً در مرورگر اجرا می‌شود.

- Connect Tailwind styling  
  تلوین به استایل‌های سراسری برنامه وصل شود تا کلاس‌های طراحی در صفحه‌ها درست اعمال شوند.

### Work Log

- [x] Branch started
- [x] Tailwind installed and connected to Angular global styles
- [x] Root app simplified to route tree rendering
- [x] Main layout shell created with top navigation and page container
- [x] Child routing structure added under main layout
- [x] Home, market, watchlist, asset, and login routes wired
- [x] Route fallback redirected to home
- [x] Theme toggle added with local storage persistence
- [x] Browser-only theme logic guarded for server rendering safety
- [x] Placeholder pages created to make all route imports valid

---

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

- Add mock market dataset  
  داده اولیه بازار با همان دارایی‌های پروژه قبلی وارد شود تا پایه نمایش بازار از همان ابتدا آماده باشد.

- Build mock market data service  
  سرویس داده اولیه ساخته شود تا بارگذاری داده‌های آغازین از منطق صفحه‌ها جدا بماند.

### Work Log

- [x] Branch started
- [x] Coin model created
- [x] Connection status model created
- [x] Default connection status extracted
- [x] Mock market dataset added
- [x] Mock market data service created
- [x] Market store service created with signal-based state
- [x] Safe read paths added for filtered coins and watchlist
- [x] Controlled write methods added for price, search, provider, and watchlist

---

## Branch: `feat/home-page-shell`

### Tasks

- Build home page route  
  صفحه خانه به عنوان ورودی اصلی برنامه ساخته شود تا تجربه نخست کاربر از این بخش آغاز شود.

- Build page composer  
  صفحه خانه فقط بخش‌ها را کنار هم بچیند و وارد جزئیات نمایشی هر بخش نشود.

- Build hero section  
  بخش بالایی خانه با عنوان اصلی، متن توضیحی و دکمه‌های اصلی ساخته شود تا هویت محصول از ابتدا روشن باشد.

- Build features section  
  بخش معرفی قابلیت‌ها ساخته شود تا نکات اصلی محصول به شکل خلاصه و قابل فهم نمایش داده شوند.

- Build market preview section  
  بخش نمایش کوتاه بازار ساخته شود تا کاربر بدون ورود به صفحه بازار، چند دارایی مهم را ببیند.

- Add preview asset navigation  
  هر دارایی در پیش‌نمایش خانه به صفحه جزئیات خودش برود تا مسیر حرکت کاربر طبیعی و مستقیم باشد.

- Connect preview data to market store  
  داده پیش‌نمایش بازار از سرویس مرکزی خوانده شود تا صفحه خانه هم از منبع یکتای داده استفاده کند.

- Keep home lightweight  
  صفحه خانه ساده و سبک نگه داشته شود و از شلوغی و ریزه‌کاری زودهنگام دور بماند.

### Work Log

- [x] Branch started
- [x] Home page composer created
- [x] Hero section built from the previous Sanay product structure
- [x] Features section rebuilt with summary strip and feature cards
- [x] Market preview section created with selected coin cards
- [x] Preview asset links wired to asset route
- [x] Home page connected to market store preview data
- [x] Motion-heavy behavior intentionally excluded from this phase

---

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

- [x] Branch started
- [x] Coin badge color helper created
- [x] Price helper created for shared price and change formatting
- [x] Coin row component created
- [x] Coin row connected to watchlist toggle behavior
- [x] Coin row navigation wired to asset route
- [x] Coin list component created as a reusable list wrapper
- [x] Empty state component created for reusable empty views
- [x] Connection badge component created
- [x] Connection badge connected to central market store state
- [x] Shared market UI components kept independent from page-level logic

---

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

- [x] Branch started
- [x] Market data loader created to hydrate store once
- [x] Initial market data wired at app startup
- [x] Market page shell created
- [x] Connection badge added to market header
- [x] Search input connected to central market store
- [x] Filtered market view rendered from store state
- [x] Coin list component reused for market results
- [x] Empty state component reused for no-result search state
- [x] Clear search action added
- [x] Asset row navigation verified through shared coin row
- [x] Market page tested successfully in browser

---

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

- [x] Branch started
- [x] Watchlist page shell created
- [x] Watchlist page connected to central market store
- [x] Watchlist coins rendered through shared coin list component
- [x] Empty state reused for empty watchlist state
- [x] Watchlist toggle flow verified from market to watchlist
- [x] Asset navigation verified from watchlist rows
- [x] Watchlist page tested successfully in browser

---

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

- [x] Branch started
- [x] Asset route param connected to asset page state
- [x] Asset coin lookup connected to central market store
- [x] Asset not-found state handled with reusable empty state
- [x] Asset header created with name, symbol, provider, price, and change
- [x] Asset description section added
- [x] Chart placeholder added for future chart integration
- [x] Asset info cards added for provider, connection status, symbol, and history placeholder
- [x] Trade entry button added as placeholder for trading modal branch
- [x] Back to market navigation added
- [x] Asset page tested with valid and invalid symbols

---

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

- [x] Branch started
- [x] Trading modal service created to own modal open state
- [x] Trading modal component created
- [x] Modal connected to central market store through active symbol
- [x] Asset page trade button connected to modal service
- [x] Modal rendered globally from main layout
- [x] Buy and sell visual state added
- [x] Price and amount inputs added
- [x] Estimated order value calculation added
- [x] Backdrop close and close button behavior added
- [x] Mock trade journal panel added
- [x] Live history area added as placeholder for future live flow
- [x] Trading modal tested from asset page

---

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

- [x] Branch started
- [x] Fake live flow service created
- [x] Fake live flow guarded against duplicate intervals
- [x] Fake provider and degraded connection status wired to market store
- [x] Fake price tick updates connected to central market store
- [x] Fake change tick updates connected to central market store
- [x] Market page verified with changing fake prices
- [x] Watchlist page verified with changing fake prices
- [x] Asset page verified with changing fake prices
- [x] Trading modal verified against store-driven fake prices

---

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

- [x] Branch started
- [x] Live ticker model created for shared provider output
- [x] Binance WebSocket adapter created
- [x] Binance combined stream URL builder added
- [x] Binance ticker message parsing added
- [x] Binance pair symbols normalized back to internal asset symbols
- [x] Browser-only WebSocket guard added
- [x] Adapter kept independent from market store state
- [x] Disconnect method added for future orchestration cleanup
- [x] Build verified without wiring adapter directly to app startup

---

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

- [x] Branch started
- [x] Nobitex WebSocket adapter created
- [x] Centrifuge dependency checked for Nobitex transport
- [x] Nobitex market channel builder added
- [x] Nobitex publication parser added
- [x] Nobitex ticker output normalized to shared LiveTicker model
- [x] Browser-only connection guard added
- [x] Adapter kept independent from market store state
- [x] Failure callbacks added for future fallback orchestration
- [x] Disconnect method added for future cleanup
- [x] Build verified without wiring adapter directly to app startup

---

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

- [x] Branch started
- [x] Central connection orchestration service created
- [x] Binance to Nobitex to Fake fallback chain added
- [x] Active connection ownership added with provider-specific connection types
- [x] Unified live ticker handler added for store updates
- [x] Binance connection timeout added
- [x] Previous provider cleanup added before fallback transitions
- [x] App startup connected to orchestration after market data hydration
- [x] Browser-only startup guard added for live connection flow
- [x] Market, asset, watchlist, and modal verified with centralized live updates

---

## Branch: `feat/theme-service-hardening`

### Tasks

- Build theme service  
  منطق حالت روشن و تیره از کامپوننت‌ها جدا شود و در یک سرویس مرکزی قرار بگیرد.

- Move local storage theme access into service  
  خواندن و ذخیره حالت کاربر فقط از مسیر سرویس انجام شود.

- Guard browser-only theme logic  
  دسترسی به حافظه مرورگر و سند صفحه فقط در مرورگر انجام شود.

- Expose readable theme state  
  وضعیت فعلی حالت روشن یا تیره به شکل خواندنی در اختیار بخش‌های دیداری قرار بگیرد.

- Connect layout theme button to service  
  دکمه تغییر حالت فقط سرویس را صدا بزند و خودش منطق نگه ندارد.

- Verify theme persistence  
  بعد از تازه‌سازی صفحه، حالت انتخاب‌شده کاربر باید حفظ شود.

### Work Log

### Work Log

- [x] Branch started
- [x] Theme mode ownership moved into a dedicated service
- [x] Theme state exposed through readable computed values
- [x] Browser-only theme access guarded for server rendering safety
- [x] Local storage theme persistence verified
- [x] Tailwind v4 dark variant configured
- [x] Global styles simplified to avoid Tailwind v4 apply conflicts
- [x] Main layout polished with centered capsule navigation
- [x] Mobile bottom navigation added for small screens
- [x] Home page light and dark mode contrast fixed
- [x] Home visual replaced with inline SVG to avoid image background issues
- [x] Home market preview connected back to parent-provided coin data
- [x] Trading modal light and dark mode styles reviewed
- [x] Theme flow tested successfully in browser

## Branch: [feature/dashboard-foundation-and-theme]

-[x] Refactored `MarketStoreService`: - Added `getNormalizedKey` for consistent symbol sanitization. - Improved `normalizeSymbol` to accurately retrieve coins from state. - Optimized `updateCoinPrice` to handle real-time updates with normalized keys. - Added `sortedCoins` computed signal to identify top market movers.

- [x] Created `PriceTickerComponent`: - Implemented a smooth, infinite marquee animation using CSS/SCSS. - Added 'Pause on Hover' functionality using Angular Signals (`isPaused`). - Integrated `price-helpers` for formatted prices and change indicators.
- [x] Implemented `ThemeService`: - Managed Dark/Light mode using Signals and LocalStorage for persistence. - Utilized `effect()` to sync theme changes with the DOM's root element.
- [x] Cleanup: Removed unused imports and refined service injections.

## Branch: `feat/login-shell`

### Tasks

- Build login page shell  
  بدنه صفحه ورود و ثبت‌نام ساخته شود تا ساختار محصول کامل باشد.

- Add form layout  
  چیدمان ورودی‌ها و دکمه اصلی ساخته شود تا مسیر ورود از نظر دیداری آماده باشد.

- Keep logic out for this phase  
  منطق واقعی ورود در این مرحله وارد نشود تا دامنه کار کنترل‌شده بماند و تمرکز روی ساختار اصلی باشد.

### Work Log

- [x] Branch started
- [x] Login page component connected to route
- [x] Glassmorphism effect added to match home page theme
- [x] Light and dark mode transitions applied to form elements
- [x] Form submission prevented to keep logic out for this phase
- [x] Shell polished and tested in browser

---

## Branch: `feat/auth-logic-and-intro`

### Tasks

- Build auth service with signal state
  سرویس احراز هویت با استفاده از سیگنال‌ها ساخته شود تا وضعیت کاربر (لاگین شده یا نه) را در کل برنامه مدیریت کند.
- Connect auth state to local storage
  وضعیت ورود کاربر در حافظه مرورگر ذخیره شود تا با رفرش کردن صفحه از بین نرود.
- Add signup flow to login shell
  حالت ثبت‌نام به پوسته لاگین اضافه شود تا کاربر بتواند بین فرم ورود و ثبت‌نام جابه‌جا شود.
- Build intro splash screen
  صفحه معرفی (Intro) ساخته شود تا در اولین ورود کاربر به سایت، پیام خوش‌آمدگویی و برندینگ نمایش داده شود.
- Orchestrate app startup flow
  مسیر بالا آمدن برنامه مدیریت شود: ابتدا نمایش اینترو، سپس هدایت به خانه (یا لاگین در صورت نیاز).

### Work Log

- [x] Branch started
- [x] AuthService implemented with Signal-based state and LocalStorage persistence
- [x] Local user database (Mock DB) added to LocalStorage for signup/login flow
- [x] Glassmorphic Login/Signup shell with background glow effects (Yellow/Blue)
- [x] Full-screen cinematic Splash screen created using `LOGOSANAYEX.png`
- [x] Implemented "Animation Freeze" mechanism using `body.splash-active` to sync Intro and Home
- [x] Added directional staggered animations (Hero from right, Features from left, Market from bottom)
- [x] Home page entrance polished with smooth cubic-bezier transitions
- [x] Splash screen configured to trigger on every refresh for brand consistency

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

---

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
