/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  
==========================================================================================*/


export default [
  {
    url: "/",
    name: "Dashboard",
    slug: "dashboard",
    icon: "HomeIcon",
    i18n: "Dashboard",
  },
  {
    header: "Data",
  },

  {
    url: "/2021/rekapkegiatan",
    name: "Rekap Kontrak",
    slug: "rekapkontrak",
    icon: "CheckSquareIcon",
  },
  {
    url: "/2021/airminum",
    name: "Daftar SPAM",
    slug: "airminum",
    icon: "CheckSquareIcon",
  },
  {
    url: "/2021/mck",
    name: "Daftar MCK",
    slug: "mck",
    icon: "CheckSquareIcon",
  },
  {
    header: "Agenda Surat"
  },
  {
    url: "/2021/surat",
    name: "Surat Masuk",
    slug: "surat",
    icon: "DownloadIcon",
  },
  {
    url: "/",
    name: "Surat Keluar",
    slug: "/",
    icon: "UploadIcon",
  },
  
  {
    header: "Map"
  },
  {
    url: "/2021/koordinat",
    name: "Koordinat",
    slug: "koordinat",
    icon: "MapIcon",
  },
]
