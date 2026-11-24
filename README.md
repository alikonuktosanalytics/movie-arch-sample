# movie-arch-sample

Pakodemy (React Native) için önerilen **yeni klasör mimarisinin** çalışan bir örneği.
Domain bilerek "film" seçildi: iş kuralları basit olsun, tartışma **yapının kendisi** üzerine olsun.

- Vite + React 18 + TypeScript (strict), react-router-dom v6, zustand, Vitest
- Network yok: tüm veri `src/lib/mocks/*.json` içinde, servisler ~300 ms yapay gecikmeyle Promise döner (skeleton'lar görünsün diye)
- Görsel yok: poster / avatar / logo'lar başlıktan üretilen gradient + baş harflerle çizilir (`designSystem/Artwork`)
- Stil: her `style.ts`, RN'deki `StyleSheet.create` muadili olan `createStyles` ile **düz stil objeleri** export eder. Yani desen RN uygulamasına 1:1 taşınır.

> Web'e özgü tek fark: RN'deki `View/Text/Pressable` yerine `div/span/button` kullanılıyor ve `:hover`, `@keyframes` gibi inline yazılamayan birkaç şey `src/index.css` içinde duruyor. Klasör yapısı, dosya sorumlulukları ve import kuralları RN ile birebir aynı.

---

## Çalıştırma

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # vitest run (tüm helper / store / servis testleri)
npm run build      # tsc --noEmit && vite build
npm run typecheck  # sadece tsc --noEmit
```

---

## Klasör ağacı

Modüllerin içinde sadece klasörler gösterildi; her ekran / component klasörünün içi aşağıdaki **"Ekran klasörü kuralı"** bölümündeki dosyalardan oluşur.

```
movie-arch-sample/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── designSystem/          # Uygulamanın görsel "kütüphanesi" — domain'den / servisten / store'dan habersiz
│   │   │   ├── Artwork/           # Poster.tsx, Avatar.tsx, helpers.ts (gradient + baş harf), __tests__/
│   │   │   ├── Badge/
│   │   │   ├── Button/
│   │   │   ├── Cards/             # MovieCard, ActorCard, SeriesCard, CompanyCard, CardSkeleton, index.ts
│   │   │   ├── Input/             # TextInput, Select
│   │   │   ├── Icon/              # SVG ikon seti (emoji yok; IconName tipi + path'ler const.ts'te)
│   │   │   ├── Modals/            # BottomSheet.tsx
│   │   │   ├── Skeleton/          # Tek skeleton primitive'i
│   │   │   └── theme/             # colors, spacing, radius, fontSize, createStyles
│   │   ├── layout/                # Görsel stili olmayan yerleşim primitive'leri
│   │   │   ├── Flex/index.tsx
│   │   │   └── Grid/index.tsx
│   │   └── common/                # Uygulama genelinde paylaşılan, ekran-üstü parçalar
│   │       ├── AsyncContent/      # loading → skeleton, error → ErrorState, success → içerik
│   │       ├── BackButton/
│   │       ├── EmptyState/
│   │       ├── ErrorState/
│   │       ├── Sidebar/
│   │       ├── PageHeader/
│   │       └── index.ts
│   ├── lib/
│   │   ├── helpers/               # Uygulama geneli saf fonksiyonlar + platform yardımcıları
│   │   │   ├── __tests__/
│   │   │   ├── array.ts           # isDefined, mostFrequent
│   │   │   ├── formatters.ts      # formatRuntime, formatYearRange, pluralize, normalizeText…
│   │   │   ├── math.ts            # sum, average, roundTo
│   │   │   ├── sendLog.ts         # analytics / log stand-in'i
│   │   │   ├── getLocalStorage.ts # = RN'deki getAsyncStorage
│   │   │   └── setLocalStorage.ts # = RN'deki setAsyncStorage
│   │   ├── hooks/
│   │   │   └── useAsync.ts        # Servis çağrısını loading/success/error state'ine çevirir
│   │   ├── mocks/                 # *.json + index.ts (tipli "tablolar") — SADECE services import eder
│   │   ├── navigation/
│   │   │   └── routes.ts          # ROUTES + buildRoute.* — modüller arası geçişin tek yolu
│   │   ├── services/              # movies.ts, actors.ts, series.ts, companies.ts, client.ts, __tests__/
│   │   └── types/                 # Domain tipleri: Movie, Actor, Series, Season, Episode, Company…
│   ├── modules/
│   │   ├── MoviesModule/
│   │   │   ├── List/              components/ MovieFilterBar, MovieGrid
│   │   │   ├── Detail/            components/ MovieHero, CastList, ProductionInfo
│   │   │   ├── Watchlist/         components/ WatchlistSummary, WatchlistItem, ClearWatchlistSheet
│   │   │   └── index.ts           # Modülün public API'si (sadece ekranlar)
│   │   ├── ActorsModule/
│   │   │   ├── List/              components/ ActorSearchBar, ActorGrid
│   │   │   ├── Detail/            components/ ActorProfile, Filmography
│   │   │   └── index.ts
│   │   ├── SeriesModule/
│   │   │   ├── components/        # Modül-içi paylaşılan: SeriesBreadcrumb (3 ekranın hepsi kullanır)
│   │   │   ├── helpers.ts         # Modül-içi paylaşılan saf fonksiyonlar: formatEpisodeCode…
│   │   │   ├── __tests__/
│   │   │   ├── SeriesList/        components/ SeriesGrid
│   │   │   ├── SeasonsList/       components/ SeasonTabs, EpisodeList
│   │   │   ├── EpisodeDetail/     components/ EpisodeInfo, EpisodeNavigator
│   │   │   └── index.ts
│   │   └── ProductionCompanyModule/
│   │       ├── List/              components/ CompanyGrid
│   │       ├── Detail/            components/ CompanyHeader, CompanyMovies
│   │       ├── Create/            components/ CompanyForm, CreateConfirmSheet
│   │       └── index.ts
│   ├── store/                     # zustand store'ları
│   │   ├── __tests__/
│   │   ├── watchlistStore.ts
│   │   └── companyStore.ts
│   ├── app.tsx                    # Router + layout (Sidebar + <Outlet/>); app seviyesindeki sabit/stil/tipler src/const.ts, style.ts, type.ts
│   ├── main.tsx
│   └── index.css                  # Reset + hover/keyframe gibi inline yazılamayanlar
├── index.html
├── package.json
├── tsconfig.json                  # strict + "@/*" → "src/*"
├── vite.config.ts                 # alias + vitest config
└── README.md
```

### Bir ekranın tam hali (örnek: `MoviesModule/Detail`)

```
Detail/
├── index.tsx          # MovieDetailScreen — sadece kompozisyon
├── helpers.ts         # orderCastByBilling
├── style.ts
├── const.ts           # BACK_LABEL
├── type.ts            # MovieDetailParams
├── skeleton.tsx       # MovieDetailSkeleton = MovieHeroSkeleton + CastListSkeleton + ProductionInfoSkeleton
├── __tests__/
│   └── helpers.test.ts
└── components/
    ├── MovieHero/
    │   ├── index.tsx
    │   ├── helpers.ts         # formatMovieMeta, getRatingTone, getWatchlistAction
    │   ├── style.ts
    │   ├── const.ts           # buton label'ları, rating eşikleri
    │   ├── type.ts            # MovieHeroProps, WatchlistAction, RatingTone
    │   ├── skeleton.tsx
    │   └── __tests__/helpers.test.ts
    ├── CastList/              # aynı dosya seti
    ├── ProductionInfo/        # aynı dosya seti
    └── index.ts               # barrel: component'ler + skeleton'ları
```

---

## Ekranlar ve route'lar

| Modül | Ekran | Route | Ne gösteriyor |
|---|---|---|---|
| MoviesModule | List | `/movies` | Arama + tür filtresi + sıralama |
| MoviesModule | Detail | `/movies/:movieId` | Hero, oyuncular (→ ActorsModule), yapım bilgisi (→ ProductionCompanyModule), watchlist ekle/çıkar |
| MoviesModule | Watchlist | `/watchlist` | zustand store'dan okuyan iş ekranı; toplamlar helpers'ta hesaplanır; "Clear all" → BottomSheet |
| ActorsModule | List | `/actors` | Aynı List/Detail deseninin başka domain'de tekrarı |
| ActorsModule | Detail | `/actors/:actorId` | Profil + on yıllara göre gruplu filmografi (→ MoviesModule) |
| SeriesModule | SeriesList | `/series` | 3 seviyeli akışın 1. seviyesi |
| SeriesModule | SeasonsList | `/series/:seriesId?season=N` | 2. seviye; seçili sezon URL'de |
| SeriesModule | EpisodeDetail | `/series/:seriesId/episodes/:episodeId` | 3. seviye; sezonlar arası önceki/sonraki bölüm |
| ProductionCompanyModule | List | `/companies` | API + store'daki şirketler birleşik |
| ProductionCompanyModule | Detail | `/companies/:companyId` | Şirket + filmleri (Lionsgate boş durumu gösterir) |
| ProductionCompanyModule | Create | `/companies/new` | Form ekranı: validation helpers'ta, sonuç store'a yazılır |

SeriesModule, Pakodemy'deki **Courses → SubCourses → SubCourseDetail** üç seviyeli akışının birebir karşılığıdır.

---

## Ekran klasörü kuralı

**Her ekran bir klasördür.** Ekranın içindeki her component de aynı dosya setine sahip bir klasördür.

| Dosya | Ne koyulur | Ne koyulmaz |
|---|---|---|
| `index.tsx` | Component / ekran. Ekranda: route param okuma, `useAsync` ile servis çağrısı, store'a bağlanma, state, navigation, alt component'leri dizme. **İnce olmalı.** | Hesaplama, filtreleme, format'lama (→ `helpers.ts`), stil objesi (→ `style.ts`), sabit string/sayı (→ `const.ts`) |
| `helpers.ts` | **Saf fonksiyonlar**: filter / sort / format / derive / validate. Aynı girdi → aynı çıktı. | **JSX yok, React import'u yok, hook yok, servis/fetch yok, store yok, `Date.now()` / `new Date()` yok** (gerekiyorsa parametre olarak alınır, ör. `currentYear`). |
| `style.ts` | `createStyles({...})` ile stil objeleri | Mantık, koşullu stil hesaplayan fonksiyonlar (koşul `index.tsx`'te spread ile yapılır) |
| `const.ts` | Label'lar, sayfa boyutları, eşikler, seçenek listeleri, başlangıç değerleri, form alan config'i | Fonksiyon, component |
| `type.ts` | Props, route param tipleri, ekrana özel tipler | Domain tipleri (→ `src/lib/types`) |
| `skeleton.tsx` | Yükleme iskeleti. Ekran skeleton'u, component skeleton'larını birleştirir. | Veri, mantık |
| `components/` | Ekrana özel component'ler + `index.ts` barrel | Başka ekranın da kullandığı component (→ bir üst seviyeye taşınır) |
| `__tests__/helpers.test.ts` | `helpers.ts` testleri | — |

### Dosya ne zaman olmayabilir?

Kural tek: **dosya ancak gerçekten boş kalacaksa yazılmaz.**

> **Kural:** `interface` / `type` tanımları yalnızca `type.ts` dosyalarında, sabitler (sayı, string, liste, regex, default prop değerleri dahil) yalnızca `const.ts` dosyalarında yazılır. Bu kural ekranlarla sınırlı değil: `components/designSystem`, `components/common`, `components/layout`, `lib/hooks`, `lib/helpers`, `lib/navigation`, `lib/services` ve `store/` için de geçerli. Klasörün dışına açılan tipler, klasörün `index` dosyasından `export type { … } from './type'` ile re-export edilir. İstisnalar: domain tipleri `lib/types/*` altında durur; test fixture'ları `__tests__` içinde kalır; sıralama fonksiyonu map'leri gibi fonksiyon içeren yapılar `helpers.ts`'te kalır.

- `index.tsx`, `style.ts`, `type.ts` → her zaman var.
- `skeleton.tsx` → sadece **asenkron veriyle render edilen** ekran/component'te. (Bu projede tüm ekranlar veri yüklüyor, hepsinde var. `MovieFilterBar` veriden gelen türleri gösterdiği için skeleton'u var; `ActorSearchBar` veriden bağımsız olduğu için yok ve ekran yüklenirken de görünür.)
- `helpers.ts` + `__tests__/` → sadece mantık varsa. Örnek: `ActorSearchBar` ve `CreateConfirmSheet` sadece prop'ları gösteriyor → helpers yok.
- `const.ts` → sabit yoksa yok.

Dosya eksikse bu bir tercih değil, "burada o sorumluluk yok" demektir.

---

## Kurallar

### 1. Component nereye konur?

| Kim kullanıyor? | Nereye |
|---|---|
| Sadece bir ekran | `modules/<Module>/<Screen>/components/<Component>/` |
| Aynı modülün birden fazla ekranı | `modules/<Module>/components/<Component>/` (ör. `SeriesModule/components/SeriesBreadcrumb`) |
| Birden fazla modül, ekran-üstü / uygulama parçası (Sidebar, EmptyState, ErrorState, PageHeader, AsyncContent) | `components/common/` |
| Domain'den bağımsız, tekrar kullanılabilir görsel yapı taşı (Button, Input, Badge, Cards, Modals, Poster/Avatar, Skeleton) | `components/designSystem/` |
| Görsel stili olmayan yerleşim (Flex, Grid) | `components/layout/` |

**Yukarı taşıma kuralı:** Bir component ikinci bir yerde lazım olduğunda kopyalanmaz; ortak en yakın üst seviyeye taşınır (ekran → modül → common/designSystem).

**designSystem kuralları:**
- Servis, store, router, domain tipi import etmez. Primitive prop alır (`MovieCard` bir `Movie` değil `title/year/rating` alır).
- Event prop'ları RN isimlendirmesiyle: `onPress`, `onChangeText`.
- `Cards` gibi "domain'e benzeyen" kartlar burada çünkü birden fazla modül kullanıyor (ör. `MovieCard` → MoviesModule, ActorsModule/Filmography, ProductionCompanyModule/CompanyMovies).

### 2. Modüller birbirinin içine girmez

- Bir modül başka bir modülün klasöründen **hiçbir şey import etmez** (ekran, component, helper, type).
- Modüller arası geçiş sadece route ile: `navigate(buildRoute.actorDetail(id))`.
- Her modülün `index.ts`'i public API'sidir ve **sadece ekranları** export eder; onu da sadece `app.tsx` import eder.
- İki modülün ortak ihtiyacı varsa o şey `components/`, `lib/` veya `store/`'a çıkar.

Örnekler: `MoviesModule/Detail` → `CastList` oyuncuya tıklanınca `buildRoute.actorDetail`, `ProductionInfo` → `buildRoute.companyDetail`; `ActorsModule/Detail/Filmography` → `buildRoute.movieDetail`.

### 3. Veri akışı

```
mocks/*.json ──► lib/services/*.ts ──► useAsync (ekranın index.tsx'i) ──► AsyncContent ──► components (props)
                                                     ▲
                                  store/*.ts (zustand) ┘   (watchlist id'leri, kullanıcının oluşturduğu şirketler)
```

- **`lib/mocks`**: Sadece `lib/services` import eder. Gerçek API geldiğinde bu klasör silinir, servislerin imzası değişmez.
- **`lib/services`**: Tek veri erişim katmanı. Async fonksiyon, `Promise` döner. Bir ekranın ihtiyacı olan birleşik veriyi de dönebilir (`getMovieDetail` → `{ movie, cast, company }`). Sıralama/format gibi **sunum kararları servise girmez** (ekran helpers'ında yapılır).
- **`lib/types`**: Domain tipleri tek yerde. Ekrana özel tipler ekranın `type.ts`'inde.
- **`lib/helpers`**: Birden fazla modülün kullandığı saf fonksiyonlar (`formatRuntime`, `pluralize`…) ve platform yardımcıları (`sendLog`, `getLocalStorage`, `setLocalStorage`). Tek ekranın kullandığı helper burada **olmaz**.
- **`lib/navigation/routes.ts`**: URL'lerin tek kaynağı. String route yazmak yasak, `buildRoute.*` kullanılır.
- **`store/`**: Ekranlar arası paylaşılan, client tarafı state (zustand). Store'lar `setLocalStorage` ile kalıcıdır. Store **sadece id/kullanıcı girdisi** tutar; sunucu verisinin kopyasını tutmaz (Watchlist id tutar, filmleri servisten çeker).
- **Fetch nerede?** Sadece ekranın `index.tsx`'inde (`useAsync`) veya event handler'da. Component'ler veri çekmez, prop alır. Helper'lar asla.

### 4. İsimlendirme

- Ekran component'i: `<Ad>Screen` (`MovieListScreen`, `CompanyCreateScreen`). Klasör adı kısa: `List`, `Detail`, `Create`, `SeasonsList`.
- Ekran-içi component'ler anlamlı isim alır (`MovieFilterBar`, `CastList`) — `AComponent/BComponent` değil.
- Skeleton'lar `<Component>Skeleton` adıyla aynı klasörün `skeleton.tsx`'inden export edilir ve `components/index.ts` barrel'ından dışarı açılır.
- Import'lar `@/` alias'ı ile (`@/lib/services/movies`). Aynı ekran/component içinde göreli (`./helpers`, `../../const`).

### 5. Test

- Her `helpers.ts` için `__tests__/helpers.test.ts`. Kenar durumlar (boş liste, geçersiz param, eşitlik, mutasyon yapmama) test edilir.
- Saf fonksiyon olduğu için mock, render veya DOM gerekmez.
- Ayrıca: `lib/helpers` (storage dahil), `lib/services` (id referansları, NotFound, kopya dönmesi) ve `store` testleri.

---

## RN'e geçişte karşılıklar

| Bu proje (web) | Pakodemy (RN) |
|---|---|
| `createStyles({...})` | `StyleSheet.create({...})` |
| `div` / `span` / `button` | `View` / `Text` / `Pressable` |
| `getLocalStorage` / `setLocalStorage` | `getAsyncStorage` / `setAsyncStorage` |
| `buildRoute.*` + `navigate(url)` | `navigation.navigate(ROUTE_NAME, params)` |
| `Grid` | `FlatList numColumns` |
| `BottomSheet` | Uygulamanın mevcut bottom sheet'i |
| `sendLog` | Mevcut analytics / log fonksiyonu |
