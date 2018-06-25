import request from '@/utils/request'
export const fetchHotFilm = () => {
  return request({
    url: '/movie/in_theaters',
    methods: 'GET'
  })
}
