import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import AboutComponent from '@/components/AboutComponent'
import bookComponent from '@/components/bookComponent'
import amuTestComponent from '@/components/AmuTestComponent'
import TestVuex1Component from '@/components/TestVuex1Component'
import phoneNumberComponent from '@/components/phoneNumberComponent'
import datePickerComponent from '@/components/datePickerComponent'
import testProgressBar from '@/components/testProgressBar'
import maploca from '@/components/mapLocation'


Vue.use(VueRouter)

const route = [
    {name:'home', path: '/', component: HomeComponent},
    {name:'about', path: '/about/:userName', component: AboutComponent},
    {name:'book', path: '/book', component: bookComponent},
    {nane:'amu', path: '/amu', component: amuTestComponent},
    {name:'test', path: '/test1', component: TestVuex1Component},
    {name:'phoneNumber', path: '/phone', component: phoneNumberComponent},
    {name:'datepicker', path: '/date', component: datePickerComponent},
    {name:'progress', path: '/progress', component: testProgressBar},
    {name:'maploca', path: '/maploca', component: maploca}
]

const router = new VueRouter({
    mode: 'history',
    routes: route
})

export default router
