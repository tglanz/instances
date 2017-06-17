import { Router } from 'express';

import * as heightMapsDataProvider from 'assets-server/data-providers/heightMaps';
import loadHeightMap from 'modules/load-heightmap';

const router = Router();

router.get('/height-map/list', async (req, res) => {
    const ids = await heightMapsDataProvider.listAvailable();
    res.status(200).send(ids);
})

router.get('/height-map/:id/generate', async (req, res) => {

    try {
    const { id } = req.params;

    const info = await heightMapsDataProvider.getInfo(id);

    const heightMap = await loadHeightMap({
        url: info.url
    })

    res.status(200).send({
        info,
        heightMap
    })
} catch (error){
        console.error(error);
        res.status(500).send(error);
    }
})

export default router;