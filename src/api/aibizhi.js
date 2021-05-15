import request from '@/utils/request'

export function getHomepage(skip) {
    return request({
        url: 'getHomepage?skip=' + skip,
        method: 'get'
    })
}

export function getsubject(skip, id) {
    return request({
        url: 'getSubject?skip=' + skip + '&id=' + id,
        method: 'get'
    })
}

export function getVertical(skip) {
    return request({
        url: 'getVertical?skip=' + skip,
        method: 'get'
    })
}

export function getCategory() {
    return request({
        url: 'getCategory',
        method: 'get'
    })
}

export function getCategorybyid(id, skip) {
    return request({
        url: 'getCategoryById?id=' + id + '&skip=' + skip,
        method: 'get'
    })
}

export function getNewCategorybyid(id, skip) {
    return request({
        url: 'getNewCategoryById?id=' + id + '&skip=' + skip,
        method: 'get'
    })
}

export function getFeaturedVideo(skip) {
    return request({
        url: 'getFeaturedVideo?skip=' + skip,
        method: 'get'
    })
}

export function getNewVideo(skip) {
    return request({
        url: 'getNewVideo?skip=' + skip,
        method: 'get'
    })
}

export function getHotVideo(skip) {
    return request({
        url: 'getHotVideo?skip=' + skip,
        method: 'get'
    })
}

export default {
    getHomepage, getsubject, getVertical, getCategory, getCategorybyid, getNewCategorybyid,
    getFeaturedVideo, getNewVideo, getHotVideo
}
