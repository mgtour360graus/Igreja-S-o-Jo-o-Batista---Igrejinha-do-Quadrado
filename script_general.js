(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"minHeight":0,"scripts":{"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getOverlays":TDV.Tour.Script.getOverlays,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"clone":TDV.Tour.Script.clone,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"openLink":TDV.Tour.Script.openLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"resumePlayers":TDV.Tour.Script.resumePlayers,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"getKey":TDV.Tour.Script.getKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPixels":TDV.Tour.Script.getPixels,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizStart":TDV.Tour.Script.quizStart,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizFinish":TDV.Tour.Script.quizFinish,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"unloadViewer":TDV.Tour.Script.unloadViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"createTween":TDV.Tour.Script.createTween,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"init":TDV.Tour.Script.init,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"enableVR":TDV.Tour.Script.enableVR,"textToSpeech":TDV.Tour.Script.textToSpeech,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"initQuiz":TDV.Tour.Script.initQuiz,"cloneBindings":TDV.Tour.Script.cloneBindings,"disableVR":TDV.Tour.Script.disableVR,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"toggleVR":TDV.Tour.Script.toggleVR,"registerKey":TDV.Tour.Script.registerKey,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"existsKey":TDV.Tour.Script.existsKey,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"isPanorama":TDV.Tour.Script.isPanorama,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"downloadFile":TDV.Tour.Script.downloadFile,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeJS":TDV.Tour.Script.executeJS,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"mixObject":TDV.Tour.Script.mixObject,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMapLocation":TDV.Tour.Script.setMapLocation,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"shareSocial":TDV.Tour.Script.shareSocial,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playAudioList":TDV.Tour.Script.playAudioList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setValue":TDV.Tour.Script.setValue,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaByName":TDV.Tour.Script.getMediaByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showWindowBase":TDV.Tour.Script.showWindowBase,"getMainViewer":TDV.Tour.Script.getMainViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"translate":TDV.Tour.Script.translate,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setLocale":TDV.Tour.Script.setLocale},"propagateClick":false,"minWidth":0,"start":"this.init()","id":"rootPlayer","scrollBarMargin":2,"backgroundColor":["#FFFFFF"],"data":{"history":{},"displayTooltipInTouchScreens":true,"defaultLocale":"pt","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false},"locales":{"pt":"locale/pt.txt"},"name":"Player741"},"left":589.65,"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"class":"Player","scrollBarColor":"#000000","xrPanelsEnabled":true,"gap":10,"width":"100%","watermark":false,"height":"100%","layout":"absolute","hash": "168165a08f11c59c520f65e9449d92368228481199ccf47286430303a0b7c88c", "definitions": [{"pitch":1.31,"audio":"this.audiores_7738EE7D_63D5_CB3C_41C5_1158CFC505FA","data":{"label":"ES_Singing Birds, Distant Traffic - Epidemic Sound"},"yaw":-145.51,"class":"DirectionalPanoramaAudio","autoplay":true,"id":"audio_70433F35_63AA_CACD_41D3_2ADCEB78AA67","maximumAngle":360},{"pitch":-36.17,"audio":"this.audiores_7728E70B_63D5_DAC4_41D4_9DC814EFC6B3","data":{"label":"Audio1"},"class":"DirectionalPanoramaAudio","autoplay":true,"id":"audio_7190C376_63AA_794C_41B7_C6C1322FDB47","maximumAngle":360},{"touchControlMode":"drag_rotation","aaEnabled":true,"class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation"},{"minHeight":1,"propagateClick":false,"id":"Image_7303C9EB_63AE_C944_41CF_1FBFEB31F567","minWidth":1,"left":"0%","data":{"name":"Image"},"url":trans('Image_7303C9EB_63AE_C944_41CF_1FBFEB31F567.url'),"horizontalAlign":"center","verticalAlign":"middle","class":"Image","top":"0%","width":"9.856%","backgroundOpacity":0,"height":"11.301%","scaleMode":"fit_inside"},{"thumbnailUrl":"media/panorama_6CD1B37E_63AD_B93C_41D3_1A3BBEAE6F2B_t.avif","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","height":4096,"url":"media/panorama_6CD1B37E_63AD_B93C_41D3_1A3BBEAE6F2B_0/{face}/0/{row}_{column}.avif","colCount":24,"rowCount":4,"width":24576,"class":"TiledImageResourceLevel"},{"tags":"ondemand","height":2048,"url":"media/panorama_6CD1B37E_63AD_B93C_41D3_1A3BBEAE6F2B_0/{face}/1/{row}_{column}.avif","colCount":12,"rowCount":2,"width":12288,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"height":1024,"url":"media/panorama_6CD1B37E_63AD_B93C_41D3_1A3BBEAE6F2B_0/{face}/2/{row}_{column}.avif","colCount":6,"rowCount":1,"width":6144,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_6CD1B37E_63AD_B93C_41D3_1A3BBEAE6F2B_t.avif"}],"id":"panorama_6CD1B37E_63AD_B93C_41D3_1A3BBEAE6F2B","audios":["this.audio_7190C376_63AA_794C_41B7_C6C1322FDB47","this.audio_715D0A96_63AA_4BCF_41D4_498EEECC0307","this.audio_70433F35_63AA_CACD_41D3_2ADCEB78AA67","this.audio_771E2163_63AA_5944_41D3_DA3CCB8E0FEE"],"hfovMax":130,"data":{"label":"Igrejinha do Quadrado -  Igreja de S\u00e3o Jo\u00e3o Batista"},"label":trans('panorama_6CD1B37E_63AD_B93C_41D3_1A3BBEAE6F2B.label'),"hfov":360,"vfov":180},{"pitch":15.73,"audio":"this.audiores_773DE2E4_63D5_FB4C_41D3_30DF30EC889B","data":{"label":"MAR COM PASSAROS"},"yaw":0.52,"class":"DirectionalPanoramaAudio","autoplay":true,"id":"audio_771E2163_63AA_5944_41D3_DA3CCB8E0FEE","maximumAngle":360},{"pitch":1.18,"audio":"this.audiores_773097B2_63D5_D9C4_41D0_B09C8D6B5D40","data":{"label":"Audio2"},"yaw":138.97,"class":"DirectionalPanoramaAudio","autoplay":true,"id":"audio_715D0A96_63AA_4BCF_41D4_498EEECC0307","maximumAngle":360},{"minHeight":1,"propagateClick":false,"id":"Image_719480CC_63AF_B759_41B2_2D705E1540AA","minWidth":1,"data":{"name":"Image"},"right":"0%","url":trans('Image_719480CC_63AF_B759_41B2_2D705E1540AA.url'),"horizontalAlign":"center","verticalAlign":"middle","class":"Image","bottom":"0%","width":"7.419%","backgroundOpacity":0,"height":"8.986%","scaleMode":"fit_inside"},{"id":"panorama_6CD1B37E_63AD_B93C_41D3_1A3BBEAE6F2B_camera","automaticZoomSpeed":4,"class":"PanoramaCamera","displayOriginPosition":{"pitch":-90,"stereographicFactor":1,"hfov":165,"yaw":-1.89,"class":"RotationalCameraDisplayPosition"},"manualZoomSpeed":0,"enterPointingToHorizon":true,"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"class":"TargetRotationalCameraDisplayMovement","targetStereographicFactor":0,"targetHfov":120,"duration":5000,"easing":"cubic_in_out","targetPitch":-14.84}],"initialSequence":"this.sequence_6DE04F8C_63AE_49DC_41D5_088083B217D3","initialPosition":{"pitch":-14.84,"hfov":120,"yaw":-1.89,"class":"PanoramaCameraPosition"}},{"id":"mainPlayList","items":[{"camera":"this.panorama_6CD1B37E_63AD_B93C_41D3_1A3BBEAE6F2B_camera","media":"this.panorama_6CD1B37E_63AD_B93C_41D3_1A3BBEAE6F2B","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"height":"100%","vrPointerColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"subtitlesTextShadowOpacity":1,"toolTipPaddingRight":6,"progressOpacity":0.7,"toolTipBorderColor":"#767676","progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","subtitlesFontColor":"#FFFFFF","subtitlesTop":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"progressBarBorderColor":"#000000","subtitlesFontSize":"3vmin","vrThumbstickRotationStep":20,"playbackBarLeft":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadHeight":15,"progressBorderColor":"#000000","toolTipFontSize":"1.11vmin","surfaceReticleSelectionColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"toolTipFontFamily":"Arial","minHeight":50,"playbackBarHeadShadow":true,"toolTipPaddingTop":4,"toolTipBackgroundColor":"#F6F6F6","progressBackgroundColor":["#000000"],"id":"MainViewer","propagateClick":false,"minWidth":100,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBottom":10,"toolTipShadowColor":"#333138","playbackBarBottom":5,"progressHeight":2,"subtitlesBorderColor":"#FFFFFF","progressBarBorderRadius":2,"progressBorderSize":0,"playbackBarHeight":10,"toolTipPaddingLeft":6,"doubleClickAction":"none","playbackBarBackgroundColor":["#FFFFFF"],"firstTransitionDuration":0,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"toolTipTextShadowColor":"#000000","playbackBarBackgroundColorDirection":"vertical","class":"ViewerArea","subtitlesBottom":50,"playbackBarRight":0,"progressBarBorderSize":0,"toolTipFontColor":"#606060","subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColor":["#3399FF"],"progressBorderRadius":2,"subtitlesTextShadowVerticalLength":1,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderRadius":0,"progressLeft":"33%","width":"100%","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowVerticalLength":0,"vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBackgroundColorRatios":[0]},{"url":trans('audiores_7738EE7D_63D5_CB3C_41C5_1158CFC505FA.url'),"id":"audiores_7738EE7D_63D5_CB3C_41C5_1158CFC505FA","class":"AudioResource"},{"url":trans('audiores_7728E70B_63D5_DAC4_41D4_9DC814EFC6B3.url'),"id":"audiores_7728E70B_63D5_DAC4_41D4_9DC814EFC6B3","class":"AudioResource"},{"url":trans('audiores_773DE2E4_63D5_FB4C_41D3_30DF30EC889B.url'),"id":"audiores_773DE2E4_63D5_FB4C_41D3_30DF30EC889B","class":"AudioResource"},{"url":trans('audiores_773097B2_63D5_D9C4_41D0_B09C8D6B5D40.url'),"id":"audiores_773097B2_63D5_D9C4_41D0_B09C8D6B5D40","class":"AudioResource"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_6DE04F8C_63AE_49DC_41D5_088083B217D3","class":"PanoramaCameraSequence"}],"children":["this.MainViewer","this.Image_7303C9EB_63AE_C944_41CF_1FBFEB31F567","this.Image_719480CC_63AF_B759_41B2_2D705E1540AA"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Thu Oct 22 2026