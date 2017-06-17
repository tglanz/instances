// This is mock data, will be stored somewhere in the future...
const data = {
    'test-01': {
        url: "http://4.bp.blogspot.com/-Yzg0MkY4AEY/T0DJmhAYOmI/AAAAAAAAAd4/pFgscvSjZHY/s1600/smallmap.jpg"
    }
}

export const listAvailable = async () => Object.keys(data);

export const getInfo = async id => data[id];