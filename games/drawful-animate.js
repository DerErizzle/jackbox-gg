(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/drawful-animate"], {
        66333: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                default: () => dt
            });
            var i = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "drawful-animate game"
                }, [t.player ? s("div", ["drawing" === t.parsedKind ? s("Drawing", {
                    attrs: {
                        player: t.player
                    }
                }) : "lobby" === t.parsedKind ? s("Lobby", {
                    attrs: {
                        player: t.player,
                        info: t.info
                    }
                }) : "postGame" === t.parsedKind ? s("PostGame", {
                    attrs: {
                        player: t.player,
                        info: t.info,
                        artifact: t.artifact
                    }
                }) : "writing" === t.parsedKind ? s("Writing", {
                    attrs: {
                        player: t.player
                    }
                }) : "choosing" === t.parsedKind ? s("Choosing", {
                    attrs: {
                        player: t.player
                    }
                }) : "liking" === t.parsedKind ? s("Choosing", {
                    attrs: {
                        player: t.player,
                        liking: ""
                    }
                }) : "ugc" === t.parsedKind ? s("Ugc", {
                    attrs: {
                        player: t.player
                    }
                }) : s("Waiting", {
                    attrs: {
                        player: t.player,
                        info: t.info
                    }
                })], 1) : t.audiencePlayer ? s("div", ["postGame" === t.audiencePlayer.kind ? s("PostGame", {
                    attrs: {
                        player: t.audiencePlayer,
                        info: t.audienceInfo,
                        artifact: t.artifact
                    }
                }) : "choosing" === t.audiencePlayer.kind ? s("Choosing", {
                    attrs: {
                        player: t.audiencePlayer,
                        audience: ""
                    }
                }) : "liking" === t.audiencePlayer.kind ? s("Choosing", {
                    attrs: {
                        player: t.audiencePlayer,
                        audience: "",
                        liking: ""
                    }
                }) : "writing" === t.audiencePlayer.kind ? s("Writing", {
                    attrs: {
                        player: t.audiencePlayer,
                        audience: ""
                    }
                }) : "flipping" === t.audiencePlayer.kind ? s("Flipping", {
                    attrs: {
                        player: t.audiencePlayer,
                        timer: t.audienceTimer,
                        audience: ""
                    }
                }) : s("Waiting", {
                    attrs: {
                        player: t.audiencePlayer,
                        info: t.audienceInfo,
                        audience: ""
                    }
                })], 1) : t._e()])
            };
            i._withStripped = !0;
            var a = s(2934),
                n = s.n(a),
                o = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "choosing scrollable",
                        class: {
                            liking: t.liking, "doubling-down": t.player.doubleDown
                        }
                    }, [i("div", {
                        staticClass: "header",
                        domProps: {
                            textContent: t._s(t.header)
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "constrain"
                    }, [t.player.doubleDown ? i("div", {
                        staticClass: "doubleDown"
                    }, [i("div", {
                        staticClass: "doubleDownPrompt",
                        domProps: {
                            textContent: t._s(t.player.doubleDown.prompt)
                        }
                    }), t._v(" "), i("button", {
                        staticClass: "choice",
                        class: t.player.doubleDown.status,
                        attrs: {
                            disabled: "available" !== t.player.doubleDown.status
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onDoubleDownClick.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n                " + t._s(t.$t("CHOOSING.DOUBLEDOWN_TEXT")) + "\n                "), "used" === t.player.doubleDown.status ? i("span", {
                        staticClass: "subheader"
                    }, [t._v(t._s(t.$t("CHOOSING.DOUBLEDOWN_USED")))]) : "round" === t.player.doubleDown.frequency ? i("span", {
                        staticClass: "subheader"
                    }, [t._v(t._s(t.$t("CHOOSING.DOUBLEDOWN_PER_ROUND")))]) : "game" === t.player.doubleDown.frequency ? i("span", {
                        staticClass: "subheader"
                    }, [t._v(t._s(t.$t("CHOOSING.DOUBLEDOWN_PER_GAME")))]) : t._e()])]) : t._e(), t._v(" "), i("div", {
                        staticClass: "prompt",
                        domProps: {
                            textContent: t._s(t.player.prompt)
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "choices"
                    }, t._l(t.player.choices, (function(e, s) {
                        return i("button", {
                            key: "choice_" + t.player.choiceId + "_" + s,
                            staticClass: "choice",
                            class: {
                                buttonBlack: !t.liking, chosen: t.submittedActions.choose === s, selected: e.selected
                            },
                            attrs: {
                                disabled: e.disabled || -1 !== t.submittedActions.choose
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.submitVote(e, s, "choose")
                                }
                            }
                        }, [i("span", {
                            staticClass: "text",
                            domProps: {
                                textContent: t._s(e.text)
                            }
                        })])
                    })), 0), t._v(" "), void 0 !== t.player.speedIndex ? i("div", {
                        staticClass: "track"
                    }, [i("div", {
                        staticClass: "track-image-container",
                        class: "speed-" + t.player.speedIndex
                    }, [i("img", {
                        staticClass: "track-image",
                        attrs: {
                            src: s(57095),
                            alt: "speed " + t.player.speedIndex
                        }
                    })])]) : t._e()])])
                };
            o._withStripped = !0;
            var r = s(55507);
            const l = {
                LOBBY: {
                    WAIT: "lehne dich zurück!",
                    VIP_WAITING: "warte bis alle spieler beigetreten sind",
                    VIP_PORTRAIT_WARNING: "möchtest du wirklich starten, bevor die anderen spieler ihren avatar gezeichnet haben?",
                    VIP_PORTRAIT_WARNING_CANCEL: "nein",
                    VIP_PORTRAIT_WARNING_CONFIRM: "ja",
                    VIP_CANSTART: "hier drücken wenn alle beigetreten sind",
                    VIP_CANCEL: "hier drücken um den spielstart abzubrechen",
                    VIP_POSTGAME: "was möchtet ihr jetzt machen?",
                    VIP_EPISODES_MENU: "episoden menü",
                    VIP_EPISODES_UNLOAD: "episode deaktivieren",
                    VIP_EPISODES_REPORT: "episode melden",
                    VIP_EPISODES_WARNING: "warnung: nutzerinhalte werden vorher nicht überprüft",
                    VIP_EPISODES_LOAD: "lade eine episode mit einer ID:",
                    VIP_EPISODES_SELECT: "oder wähle eine episode:",
                    VIP_EPISODES_BACK: "zurück",
                    VIP_EPISODES_SUBMIT: "absenden",
                    VIP_EPISODES_VIEW_AUTHOR: "autor anzeigen",
                    BUTTON_START: "alle bereit",
                    BUTTON_CANCEL: "abbrechen",
                    BUTTON_CHANGENAME: "name ändern",
                    BUTTON_SAMEPLAYERS: "gleiche spieler",
                    BUTTON_NEWPLAYERS: "andere spieler",
                    PROMPT_ENTERNAME: "gib deinen namen ein",
                    PROMPT_CHOOSECHARACTER: "wähle deinen charakter",
                    BUTTON_CENSOROPTIONS: "zensur optionen",
                    CENSOR_PROMPT: ""
                },
                TUTORIAL: {
                    SLIDE_1_TITLE: "Du wirst eine einfache Animation erstellen.",
                    SLIDE_1_ITEM_1: "Zeichne dein erstes Bild.",
                    SLIDE_1_ITEM_2: "Klicke dann auf Bild 2.",
                    SLIDE_2_TITLE: "Zeichne dein zweites Bild.",
                    SLIDE_2_ITEM_1: "Du siehst deine erste Zeichnung als Referenz.",
                    SLIDE_2_ITEM_2: "Die blassen Linien werden später nicht zu sehen sein.",
                    SLIDE_3_TITLE: "Du hast 3 Farben.",
                    SLIDE_3_ITEM_1: "Alle Spieler haben unterschiedliche Farben.",
                    SLIDE_3_ITEM_2: "Es gibt KEIN Radiergummi.",
                    SLIDE_4_TITLE: "Wenn BEIDE Bilder fertig sind, klicke auf absenden.",
                    SLIDE_4_ITEM_1: "Du kannst zwischen Tabs jederzeit wechseln.",
                    SLIDE_5_TITLE: "Und tada, du hast einen Avatar!"
                },
                UGC: {
                    BUTTON_ADD: "prompt hinzufügen",
                    BUTTON_BACK_TO_EPISODES: "zurück zu den episoden",
                    BUTTON_BACK_TO_MENU: "zurück zum menü",
                    BUTTON_CLOSE: "schliessen",
                    BUTTON_DELETE: "löschen",
                    BUTTON_DONE: "fertig",
                    BUTTON_EDIT: "bearbeiten",
                    BUTTON_PLAY: "spielen",
                    BUTTON_PUBLISH: "veröffentlichen",
                    BUTTON_SAVE: "speichern",
                    CREATE_NEW_BUTTON: "erstellen",
                    CREATE_NEW_EPISODE: "erstelle eine neue episode",
                    CREATE_NEW_NAME_PROMPT: "gebe der episode, in der alle deine prompts gespeichert sind, zuerst einen namen.",
                    DELETE_WARNING: "möchtest du die episode wirklich löschen?",
                    DELETE_WARNING_CANCEL: "nein",
                    DELETE_WARNING_CONFIRM: "ja",
                    INPUT_PLACEHOLDER: "gib einen prompt ein",
                    TITLE_INPUT_PLACEHOLDER: "gib einen titel ein",
                    LABEL_HIDDEN: "versteckt",
                    PREVIOUS_EPISODES: "ältere episoden",
                    TOGGLE_PROMPTS_PROMPT: "tippe um prompts zu zeigen / verstecken",
                    TOS_WARNING: "durch das teilen stimmst du unseren [tos]Nutzungsbedingungen[/tos] zu",
                    TOS_WARNING_AGREE: "zustimmen und teilen",
                    TOS_WARNING_BACK: "zurück zum menü",
                    HEADER_DEFAULT: "erstellen oder laden?",
                    HEADER_TITLE: "benenne die episode",
                    HEADER_WRITE: "schreibe deine prompts",
                    HEADER_PUBLISH: "veröffentliche die episode"
                },
                WRITING: {
                    DONE: "danke für deine antwort. wir sagen dir bescheid, wenn es das publikum richtig hat.",
                    BUTTON_SUBMIT: "senden",
                    FRIEND_HINT: "psstâ€¦ er/seine sind die vom spiel verwendeten pronomen",
                    PROMPT: "schreibe einen titel, der die anderen austrickst",
                    FILTER_ERROR: "das kannst du leider nicht schreiben! (du kannst die filter-einstellungen in den optionen anpassen)"
                },
                DRAWING: {
                    BUTTON_SUBMIT: "absenden",
                    FRAME_1: "bild 1",
                    FRAME_2: "bild 2"
                },
                FLIPPING: {
                    DONE_TEXT: "danke! es geht gleich weiter."
                },
                CHOOSING: {
                    DOUBLEDOWN_USED: "bereits eingelöst",
                    DOUBLEDOWN_PER_ROUND: "(einmal pro runde)",
                    DOUBLEDOWN_PER_GAME: "(einmal pro spiel)",
                    DOUBLEDOWN_TEXT: "double down?"
                }
                },
                c = {
                    en: l,
                    fr: l,
                    it: l,
                    de: l,
                    es: l,
                    "es-XL": l
                };
            var u = function(t, e, s, i) {
                return new(s || (s = Promise))((function(a, n) {
                    function o(t) {
                        try {
                            l(i.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(t) {
                        try {
                            l(i.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(o, r)
                    }
                    l((i = i.apply(t, e || [])).next())
                }))
            };
            const p = n().extend({
                props: {
                    player: Object,
                    audience: Boolean,
                    liking: Boolean
                },
                i18n: {
                    messages: c
                },
                data: () => ({
                    chosenIndex: -1,
                    rateLimited: !1,
                    submittedActions: {
                        choose: -1,
                        doubleDown: -1
                    }
                }),
                computed: {
                    header() {
                        return this.player.header ? this.player.header : this.$ecast.name
                    }
                },
                watch: {
                    "player.choiceId": function() {
                        const t = this.$el.querySelector(":hover");
                        t && t instanceof HTMLElement && t.blur(), this.submittedActions.choose = -1, this.chosenIndex = -1
                    }
                },
                methods: {
                    onDoubleDownClick() {
                        this.player.doubleDown && this.player.doubleDown.responseKey || console.error("Missing doubleDown responseKey"), this.$ecast.updateObject(this.player.doubleDown.responseKey, {
                            action: "doubleDown",
                            choice: 0
                        }).catch(this.$handleEcastError)
                    },
                    submitVoteAudience(t, e) {
                        return u(this, void 0, void 0, (function*() {
                            if (this.audience && !this.player.countGroupName && console.error("Missing count group name"), this.submittedActions[e] = t, this.rateLimited) return;
                            const s = void 0 !== this.player.choices[t].countGroupKey ? this.player.choices[t].countGroupKey : `${t}`;
                            try {
                                yield this.$ecast.incrementCountGroupCounter(this.player.countGroupName, s)
                            } catch (t) {
                                t instanceof r.EcastRateLimitExceeded || this.$handleEcastError(t), this.rateLimited = !0, setTimeout((() => {
                                    this.rateLimited = !1
                                }), 1e3)
                            }
                        }))
                    },
                    submitVote(t, e, s) {
                        return u(this, void 0, void 0, (function*() {
                            if (t.target instanceof HTMLElement && t.target.blur(), this.audience) return this.submitVoteAudience(e, s);
                            this.audience || this.player.responseKey || console.error("Missing response entity for vote session"), this.submittedActions[s] = e;
                            const i = void 0 !== this.player.choices[e].key ? this.player.choices[e].key : e;
                            this.$ecast.updateObject(this.player.responseKey, {
                                action: s,
                                choice: i
                            }).catch(this.$handleEcastError)
                        }))
                    }
                }
            });
            var d = s(51900),
                h = (0, d.Z)(p, o, [], !1, null, null, null);
            h.options.__file = "src/games/pp8/drawful-animate/views/Choosing.vue";
            const _ = h.exports;
            var v = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "drawing"
                }, [s("div", {
                    ref: "content",
                    staticClass: "content"
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.player.header)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain"
                }, [s("fieldset", {
                    attrs: {
                        disabled: t.isSubmitting
                    }
                }, [t.player.prompt ? s("div", {
                    staticClass: "prompt",
                    domProps: {
                        textContent: t._s(t.player.prompt)
                    }
                }) : t._e(), t._v(" "), s("div", {
                    staticClass: "controls"
                }, [s("button", {
                    class: {
                        "frame-button": !0, active: 0 === t.activeFrame
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), e.stopPropagation(), t.onFrameClick(0)
                        }
                    }
                }, [t._v("\n                        " + t._s(t.$t("DRAWING.FRAME_1")) + "\n                    ")]), t._v(" "), s("button", {
                    class: {
                        "frame-button": !0, active: 1 === t.activeFrame
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), e.stopPropagation(), t.onFrameClick(1)
                        }
                    }
                }, [t._v("\n                        " + t._s(t.$t("DRAWING.FRAME_2")) + "\n                    ")])]), t._v(" "), s("div", {
                    ref: "stage",
                    staticClass: "stage",
                    style: t.stageDimensions
                }), t._v(" "), t.player.colors ? s("div", {
                    staticClass: "palette"
                }, t._l(t.player.colors, (function(e, i) {
                    return s("ColorButton", {
                        key: i,
                        class: {
                            color: !0, active: t.activeColor === e
                        },
                        attrs: {
                            hex: e,
                            active: t.activeColor === e
                        },
                        on: {
                            clicked: function(s) {
                                return t.onColorClick(e)
                            }
                        }
                    })
                })), 1) : t._e(), t._v(" "), s("button", {
                    staticClass: "submit-button",
                    attrs: {
                        type: "submit",
                        disabled: !t.canSubmit
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), e.stopPropagation(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [t._v("\n                    " + t._s(t.$t("DRAWING.BUTTON_SUBMIT")) + "\n                ")])])])]), t._v(" "), t.player.showTutorial && !t.hasSeenTutorial ? s("Tutorial", {
                    attrs: {
                        slides: t.slides
                    },
                    on: {
                        tutorialComplete: t.onTutorialComplete
                    }
                }) : t._e()], 1)
            };
            v._withStripped = !0;
            var m = s(17819),
                y = s(94835),
                E = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("button", {
                        staticClass: "svg-container",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onColorClick()
                            }
                        }
                    }, [s("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 100 100"
                        }
                    }, [s("defs"), t._v(" "), s("g", {
                        attrs: {
                            id: "ColorSelect",
                            "data-name": "Layer 2"
                        }
                    }, [s("g", {
                        attrs: {
                            id: "UI"
                        }
                    }, [s("path", {
                        style: {
                            fill: t.hex,
                            stroke: "none",
                            strokeWidth: .090248
                        },
                        attrs: {
                            id: "path68",
                            d: "m 24.674841,80.964093 c -2.53527,-0.247984 -3.97558,-0.818724 -5.249833,-2.080311 -1.007461,-0.997446 -1.515304,-1.910747 -2.05347,-3.692941 -0.196892,-0.652029 -0.207986,-0.854054 -0.240015,-4.370557 -0.02481,-2.723643 -0.0054,-3.739661 0.07444,-3.88876 0.156667,-0.292734 0.05196,-9.203441 -0.138585,-11.793791 -0.189412,-2.574944 -0.276386,-8.308298 -0.1763,-11.62169 0.04391,-1.453849 0.09273,-2.44853 0.108481,-2.210399 0.01575,0.238131 0.06268,0.432965 0.104291,0.432965 0.07402,0 0.104402,-1.115922 0.275467,-10.117705 0.08621,-4.536938 0.1601,-5.482612 0.591071,-7.565491 0.411726,-1.989866 1.824998,-3.650128 3.706276,-4.354004 0.472783,-0.176892 1.809902,-0.431448 3.545085,-0.674901 1.032293,-0.144836 47.002008,-0.221915 49.449724,-0.08291 1.933145,0.109779 3.073523,0.358224 4.192344,0.913352 1.65418,0.820759 2.752578,2.159163 3.449644,4.203411 0.406366,1.191729 0.517141,2.109979 0.498421,4.131556 -0.01196,1.291678 -0.03243,1.604794 -0.06925,1.059079 l -0.05227,-0.774779 -0.0808,0.638054 c -0.11303,0.892605 0.0095,5.987031 0.230135,9.570802 0.152344,2.474163 0.183608,3.949842 0.176169,8.315402 -0.0051,2.964305 -0.04577,5.398896 -0.09224,5.514605 -0.07169,0.178495 -0.084,0.157335 -0.08898,-0.152875 -0.0044,-0.276662 -0.03069,-0.335133 -0.113345,-0.252478 -0.08056,0.08056 -0.123572,2.619553 -0.171316,10.113147 -0.06052,9.49925 -0.07353,10.076101 -0.257007,11.399105 -0.432186,3.116322 -0.764055,3.977443 -2.010302,5.21625 -0.872149,0.866944 -1.542264,1.254132 -2.663793,1.53912 -0.826984,0.210143 -2.413758,0.438599 -3.85949,0.55567 -0.998637,0.08087 -48.269538,0.110798 -49.084543,0.03108 z"
                        }
                    }), t._v(" "), s("path", {
                        style: {
                            fill: t.outlineFill
                        },
                        attrs: {
                            id: "path50",
                            d: "m 95.76,18.84 a 37,37 0 0 0 -0.7,-6 C 94.46,9.26 92,6.99 88.14,6.08 A 49.23,49.23 0 0 0 79.3,5.21 h -6.74 -6 C 34.5,4.97 73.89,4.66 41.84,4.5 36.24,4.5 30.65,5.11 25.06,5.14 6.39,5.22 34.46,4.78 15.78,4.83 A 14.73,14.73 0 0 0 11.52,5.58 C 5.39,7.5 4.06,12.02 4,16.99 4,26.05 4,72.57 4.05,81.13 a 37,37 0 0 0 0.71,6 c 0.6,3.57 3.06,5.85 6.92,6.76 a 49.23,49.23 0 0 0 8.84,0.86 c 17.41,0.07 -13.67,0 3.74,0.06 32.06,0.17 -7.33,0.49 24.73,0.65 5.59,0 11.18,-0.61 16.77,-0.64 18.68,-0.09 -0.4,0.36 18.27,0.31 a 14.79,14.79 0 0 0 4.27,-0.75 c 6.12,-1.92 7.46,-6.45 7.49,-11.42 0.06,-9.04 0.02,-55.56 -0.03,-64.12 z M 82.27,61.16 c 0,2.11 0,3.34 0,4 0,0.51 0,1.78 0,4.52 a 31.1,31.1 0 0 1 -0.62,5.94 5.73,5.73 0 0 1 -4.88,4.64 29,29 0 0 1 -4.34,0.48 c -6.18,0 -39.76,0 -46.3,0 -3.58,0 -6.85,-0.91 -8.24,-5 a 9.34,9.34 0 0 1 -0.54,-2.86 c 0,-12.54 0.29,0.27 0.22,-12.27 0,-3.76 -0.47,-7.51 -0.45,-11.27 0.11,-21.52 0.34,4.93 0.46,-16.6 0.07,-11.69 0,9.18 0.05,-2.51 a 31.09,31.09 0 0 1 0.61,-5.94 5.75,5.75 0 0 1 4.89,-4.64 28.83,28.83 0 0 1 4.33,-0.48 c 6.19,0 39.77,0 46.3,0 3.59,0 6.86,0.91 8.24,5 a 9.36,9.36 0 0 1 0.55,2.86 c 0,12.54 -0.29,-6.31 -0.23,6.23 0,3.75 0.48,7.51 0.46,11.26 -0.15,21.57 -0.38,-4.88 -0.51,16.64 z"
                        }
                    })])])])])
                };
            E._withStripped = !0;
            const C = n().extend({
                name: "SvgIcon",
                props: {
                    hex: {
                        type: String,
                        default: "#ffaf23"
                    },
                    active: {
                        type: Boolean,
                        default: !1
                    },
                    icon: {
                        type: String,
                        default: null
                    },
                    hasFill: {
                        type: Boolean,
                        default: !1
                    },
                    growByHeight: {
                        type: Boolean,
                        default: !0
                    }
                },
                computed: {
                    outlineFill() {
                        return this.active ? "#030300" : "transparent"
                    }
                },
                mounted() {},
                methods: {
                    onColorClick() {
                        this.$emit("clicked", this.hex)
                    }
                }
            });
            var b = (0, d.Z)(C, E, [], !1, null, "96847278", null);
            b.options.__file = "src/games/pp8/drawful-animate/views/ColorButton.vue";
            const f = b.exports,
                g = m.Z.extend({
                    props: {
                        player: Object
                    },
                    i18n: {
                        messages: c
                    },
                    components: {
                        Tutorial: y.Z,
                        ColorButton: f
                    },
                    data() {
                        return {
                            hasSeenTutorial: !1,
                            slides: [{
                                title: this.$t("TUTORIAL.SLIDE_1_TITLE"),
                                listItems: [this.$t("TUTORIAL.SLIDE_1_ITEM_1"), this.$t("TUTORIAL.SLIDE_1_ITEM_2")],
                                imageClass: "tutorial-0",
                                arrow: {
                                    top: "33%",
                                    left: "80%",
                                    transform: "rotate(135deg)"
                                }
                            }, {
                                title: this.$t("TUTORIAL.SLIDE_2_TITLE"),
                                listItems: [this.$t("TUTORIAL.SLIDE_2_ITEM_1"), this.$t("TUTORIAL.SLIDE_2_ITEM_2")],
                                imageClass: "tutorial-1"
                            }, {
                                title: this.$t("TUTORIAL.SLIDE_3_TITLE"),
                                listItems: [this.$t("TUTORIAL.SLIDE_3_ITEM_1"), this.$t("TUTORIAL.SLIDE_3_ITEM_2")],
                                imageClass: "tutorial-2",
                                arrow: {
                                    top: "67%",
                                    left: "20%"
                                }
                            }, {
                                title: this.$t("TUTORIAL.SLIDE_4_TITLE"),
                                listItems: [this.$t("TUTORIAL.SLIDE_4_ITEM_1")],
                                imageClass: "tutorial-3",
                                arrow: {
                                    top: "87%",
                                    left: "28%"
                                }
                            }, {
                                title: this.$t("TUTORIAL.SLIDE_5_TITLE"),
                                listItems: [],
                                imageClass: "tutorial-4"
                            }]
                        }
                    },
                    computed: {
                        activeColor() {
                            return this.stage ? this.stage.canvas.color : ""
                        },
                        activeFrame() {
                            return this.stage ? this.stage.canvas.frame : 0
                        },
                        activeThickness() {
                            return this.stage ? this.stage.canvas.thickness : 1
                        },
                        canSubmit() {
                            return null !== this.stage && this.stage.canvas.lines.length > 0 && this.stage.canvas.lines2.length > 0
                        }
                    },
                    methods: {
                        onFrameClick(t) {
                            this.stage && (this.stage.canvas.frame = t)
                        },
                        onColorClick(t) {
                            this.stage && (this.stage.canvas.color = t)
                        },
                        onTutorialComplete() {
                            this.hasSeenTutorial = !0
                        }
                    }
                });
            var I = (0, d.Z)(g, v, [], !1, null, null, null);
            I.options.__file = "src/games/pp8/drawful-animate/views/Drawing.vue";
            const T = I.exports;
            var O = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "flipping scrollable"
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.player.header)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain"
                }, [s("div", {
                    staticClass: "prompt",
                    domProps: {
                        textContent: t._s(t.prompt)
                    }
                }), t._v(" "), t.player.success ? t._e() : s("div", {
                    staticClass: "flipchart"
                }, [s("div", {
                    staticClass: "row"
                }, [s("button", {
                    staticClass: "circle-button right",
                    class: {
                        selected: t.chosenKey === t.player.countGroupChoices[0]
                    },
                    attrs: {
                        disabled: t.isSubmitting,
                        "aria-label": "Slide top row right"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.voteClicked(e, 0)
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "circle-button left",
                    class: {
                        selected: t.chosenKey === t.player.countGroupChoices[1]
                    },
                    attrs: {
                        disabled: t.isSubmitting,
                        "aria-label": "Slide top row left"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.voteClicked(e, 1)
                        }
                    }
                }), t._v(" "), s("div", {
                    staticClass: "carousel top",
                    class: {
                        "slide-left": "topLeft" === t.lastChange, "slide-right": "topRight" === t.lastChange
                    }
                }, [s("div", {
                    staticClass: "owl prev",
                    class: t.topPrevName
                }), t._v(" "), s("div", {
                    staticClass: "owl",
                    class: t.topCurrentName
                }), t._v(" "), s("div", {
                    staticClass: "owl next",
                    class: t.topNextName
                })])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "carousel bottom",
                    class: {
                        "slide-left": "bottomLeft" === t.lastChange, "slide-right": "bottomRight" === t.lastChange
                    }
                }, [s("div", {
                    staticClass: "owl prev",
                    class: t.bottomPrevName
                }), t._v(" "), s("div", {
                    staticClass: "owl",
                    class: t.bottomCurrentName
                }), t._v(" "), s("div", {
                    staticClass: "owl next",
                    class: t.bottomNextName
                })]), t._v(" "), s("button", {
                    staticClass: "circle-button right",
                    class: {
                        selected: t.chosenKey === t.player.countGroupChoices[2]
                    },
                    attrs: {
                        disabled: t.isSubmitting,
                        "aria-label": "Slide bottom row right"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.voteClicked(e, 2)
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "circle-button left",
                    class: {
                        selected: t.chosenKey === t.player.countGroupChoices[3]
                    },
                    attrs: {
                        disabled: t.isSubmitting,
                        "aria-label": "Slide bottom row left"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.voteClicked(e, 3)
                        }
                    }
                })]), t._v(" "), t.timer ? s("div", {
                    staticClass: "timer"
                }, [s("span", {
                    staticClass: "timer-bar",
                    style: "width: " + t.progressPercent + "%"
                })]) : t._e()]), t._v(" "), t.player.success ? s("div", {}, [s("div", {
                    staticClass: "owl-complete",
                    class: t.completeName
                })]) : t._e()])])
            };
            O._withStripped = !0;
            var w = s(96486),
                S = function(t, e, s, i) {
                    return new(s || (s = Promise))((function(a, n) {
                        function o(t) {
                            try {
                                l(i.next(t))
                            } catch (t) {
                                n(t)
                            }
                        }

                        function r(t) {
                            try {
                                l(i.throw(t))
                            } catch (t) {
                                n(t)
                            }
                        }

                        function l(t) {
                            var e;
                            t.done ? a(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                t(e)
                            }))).then(o, r)
                        }
                        l((i = i.apply(t, e || [])).next())
                    }))
                };
            const N = n().extend({
                props: {
                    player: Object,
                    timer: Object
                },
                i18n: {
                    messages: c
                },
                data: () => ({
                    isSubmitting: !1,
                    chosenKey: "",
                    lastSubmittedKey: "",
                    lastChange: "",
                    throttledSubmitVote: void 0
                }),
                computed: {
                    prompt() {
                        return "" !== this.chosenKey ? this.$t("FLIPPING.DONE_TEXT").toString() : this.player.prompt
                    },
                    topPrevName() {
                        const t = (this.player.topOrder.length + this.player.topIndex - 1) % this.player.topOrder.length;
                        return this.player.topOrder[t]
                    },
                    topCurrentName() {
                        return this.player.topOrder[this.player.topIndex]
                    },
                    topNextName() {
                        const t = (this.player.topIndex + 1) % this.player.topOrder.length;
                        return this.player.topOrder[t]
                    },
                    bottomPrevName() {
                        const t = (this.player.bottomOrder.length + this.player.bottomIndex - 1) % this.player.bottomOrder.length;
                        return this.player.bottomOrder[t]
                    },
                    bottomCurrentName() {
                        return this.player.bottomOrder[this.player.bottomIndex]
                    },
                    bottomNextName() {
                        const t = (this.player.bottomIndex + 1) % this.player.bottomOrder.length;
                        return this.player.bottomOrder[t]
                    },
                    completeName() {
                        return this.player.success ? `OwlComplete_${this.player.owlIndex}` : ""
                    },
                    progressPercent() {
                        return this.timer.timeLeft % 10 / 10 * 100
                    }
                },
                watch: {
                    "player.bottomIndex": function(t, e) {
                        var s;
                        this.chosenKey = "", this.isSubmitting = !1, this.lastSubmittedKey = "", t !== (null === (s = this.player.bottomOrder) || void 0 === s ? void 0 : s.length) - 1 ? this.lastChange = t > e || 0 === t ? "bottomLeft" : "bottomRight" : this.lastChange = "bottomRight"
                    },
                    "player.topIndex": function(t, e) {
                        var s;
                        this.chosenKey = "", this.isSubmitting = !1, this.lastSubmittedKey = "", t !== (null === (s = this.player.topOrder) || void 0 === s ? void 0 : s.length) - 1 ? this.lastChange = t > e || 0 === t ? "topLeft" : "topRight" : this.lastChange = "topRight"
                    },
                    "player.interactionId": function() {
                        this.chosenKey = "", this.isSubmitting = !1, this.lastSubmittedKey = ""
                    }
                },
                mounted() {
                    this.throttledSubmitVote = (0, w.throttle)(this.submitVote.bind(this), 400)
                },
                beforeDestroy() {
                    var t;
                    null === (t = this.throttledSubmitVote) || void 0 === t || t.cancel()
                },
                methods: {
                    voteClicked(t, e) {
                        return S(this, void 0, void 0, (function*() {
                            t.target instanceof HTMLElement && t.target.blur();
                            const s = this.player.countGroupChoices ? `${this.player.countGroupChoices[e]}` : `${e}`;
                            if (s !== this.chosenKey) return this.chosenKey = s, this.throttledSubmitVote ? this.throttledSubmitVote() : void 0
                        }))
                    },
                    submitVote() {
                        return S(this, void 0, void 0, (function*() {
                            this.player.countGroupName || console.error("Missing count group key for vote session");
                            const {
                                chosenKey: t,
                                lastSubmittedKey: e
                            } = this;
                            if (t !== this.lastSubmittedKey) {
                                this.isSubmitting = !0;
                                try {
                                    if (yield this.$ecast.incrementCountGroupCounter(this.player.countGroupName, t), this.lastSubmittedKey = t, !this.player.countGroupNegativeName) return;
                                    "" !== e && this.$ecast.incrementCountGroupCounter(this.player.countGroupNegativeName, e).catch(this.$handleEcastError)
                                } catch (t) {
                                    t instanceof r.EcastRateLimitExceeded || this.$handleEcastError(t)
                                }
                                this.isSubmitting = !1
                            }
                        }))
                    }
                }
            });
            var D = (0, d.Z)(N, O, [], !1, null, "c1eff0c0", null);
            D.options.__file = "src/games/pp8/drawful-animate/views/Flipping.vue";
            const P = D.exports;
            var A = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "lobby scrollable",
                    class: {
                        isFriendMode: t.player.isFriendMode
                    }
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.info.name)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain"
                }, [s("LobbyActions", {
                    attrs: {
                        player: t.player,
                        classes: {
                            action: "buttonBlack"
                        },
                        "should-start": t.shouldStart
                    }
                }), t._v(" "), t.player.playerCanDoEpisodes ? s("div", [t.player.activeContentId ? s("div", [s("div", [t._v(t._s(t.player.episodeTitle))]), t._v(" "), t.player.activeContentId ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.VIP_EPISODES_UNLOAD",
                        expression: "'LOBBY.VIP_EPISODES_UNLOAD'"
                    }],
                    staticClass: "buttonBlack",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionEvent("ugc-unload")
                        }
                    }
                }) : t._e(), t._v(" "), t.player.playerCanReport ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.VIP_EPISODES_REPORT",
                        expression: "'LOBBY.VIP_EPISODES_REPORT'"
                    }],
                    staticClass: "buttonBlack",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onReportClick.apply(null, arguments)
                        }
                    }
                }) : t._e(), t._v(" "), t.player.playerCanViewAuthor ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.VIP_EPISODES_VIEW_AUTHOR",
                        expression: "'LOBBY.VIP_EPISODES_VIEW_AUTHOR'"
                    }],
                    staticClass: "buttonBlack",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionEvent("ugc-view-author")
                        }
                    }
                }) : t._e()]) : s("div", [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.VIP_EPISODES_MENU",
                        expression: "'LOBBY.VIP_EPISODES_MENU'"
                    }],
                    staticClass: "buttonBlack",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onEpisodesClick.apply(null, arguments)
                        }
                    }
                })]), t._v(" "), t.player.lastUGCResult && t.player.lastUGCResult.error ? s("div", [t._v("\n                " + t._s(t.player.lastUGCResult.error) + "\n            ")]) : t._e()]) : t._e()], 1)])
            };
            A._withStripped = !0;
            var x = s(13494),
                L = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "drawful-animate episodes"
                    }, [s("button", {
                        staticClass: "backButton buttonBlack",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onBackClick.apply(null, arguments)
                            }
                        }
                    }, [t._v(t._s(t.$t("LOBBY.VIP_EPISODES_BACK")))]), t._v(" "), s("div", [t._v(t._s(t.$t("LOBBY.VIP_EPISODES_LOAD")))]), t._v(" "), s("fieldset", {
                        staticClass: "inputEpisode"
                    }, [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.answer,
                            expression: "answer"
                        }, {
                            name: "mask",
                            rawName: "v-mask",
                            value: "XXX-XXXX",
                            expression: "'XXX-XXXX'"
                        }],
                        attrs: {
                            rows: "1",
                            placeholder: "???-????"
                        },
                        domProps: {
                            value: t.answer
                        },
                        on: {
                            input: [function(e) {
                                e.target.composing || (t.answer = e.target.value)
                            }, t.onAnswerInput]
                        }
                    }), t._v(" "), s("button", {
                        staticClass: "submit buttonBlack",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onSubmitInput.apply(null, arguments)
                            }
                        }
                    }, [t._v(t._s(t.$t("LOBBY.VIP_EPISODES_SUBMIT")))])]), t._v(" "), s("div", {
                        staticClass: "episodes-warning"
                    }, [t._v(t._s(t.$t("LOBBY.VIP_EPISODES_WARNING")))]), t._v(" "), t.episodes.length ? s("div", [s("div", [t._v(t._s(t.$t("LOBBY.VIP_EPISODES_SELECT")))]), t._v(" "), t._l(t.episodes, (function(e, i) {
                        return s("button", {
                            key: e.remoteContentId || e.localContentId,
                            staticClass: "episode buttonBlack",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.onEpisodeClick(i)
                                }
                            }
                        }, [t._v("\n            " + t._s(e.metadata.title) + "\n            "), e.remoteContentId ? s("span", {
                            staticClass: "episodeId"
                        }, [t._v(t._s(e.formattedRemoteContentId))]) : t._e()])
                    }))], 2) : t._e()])
                };
            L._withStripped = !0;
            var R = s(79278);
            n().use(R.ZP);
            const k = n().extend({
                props: {
                    episodes: Array
                },
                i18n: {
                    messages: c
                },
                data: () => ({
                    answer: ""
                }),
                methods: {
                    onEpisodeClick(t) {
                        const e = this.episodes[t],
                            s = e.remoteContentId || e.localContentId;
                        this.$emit("resolve", {
                            action: "load",
                            contentId: s
                        })
                    },
                    onAnswerInput(t) {
                        const e = t.target;
                        this.answer = e.value
                    },
                    onBackClick() {
                        this.$emit("resolve", {})
                    },
                    onSubmitInput() {
                        this.$emit("resolve", {
                            action: "input",
                            answer: this.answer
                        })
                    }
                }
            });
            var $ = (0, d.Z)(k, L, [], !1, null, null, null);
            $.options.__file = "src/games/pp8/drawful-animate/views/EpisodesModal.vue";
            const B = $.exports;
            var U = function(t, e, s, i) {
                return new(s || (s = Promise))((function(a, n) {
                    function o(t) {
                        try {
                            l(i.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(t) {
                        try {
                            l(i.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(o, r)
                    }
                    l((i = i.apply(t, e || [])).next())
                }))
            };
            const G = n().extend({
                components: {
                    LobbyActions: x.Z
                },
                props: {
                    info: Object,
                    player: Object
                },
                i18n: {
                    messages: c
                },
                data: () => ({
                    showEpisodesModal: !1
                }),
                methods: {
                    shouldStart() {
                        return U(this, void 0, void 0, (function*() {
                            return !(!this.player.allPlayersHavePortraits && "confirm" !== (yield this.$showModal("Options", {
                                text: this.$t("LOBBY.VIP_PORTRAIT_WARNING"),
                                options: [{
                                    text: this.$t("LOBBY.VIP_PORTRAIT_WARNING_CONFIRM"),
                                    value: "confirm"
                                }, {
                                    text: this.$t("LOBBY.VIP_PORTRAIT_WARNING_CANCEL"),
                                    value: "cancel"
                                }]
                            })))
                        }))
                    },
                    onActionEvent(t) {
                        this.player.responseKey && this.$ecast.updateObject(this.player.responseKey, {
                            action: t
                        }).catch(this.$handleEcastError)
                    },
                    onReportClick() {
                        window.location.href = `mailto:support@jackboxgames.com?subject=Report episode id ${this.player.formattedActiveContentId}`
                    },
                    onEpisodesClick() {
                        var t;
                        return U(this, void 0, void 0, (function*() {
                            const e = yield this.$showModal(B, {
                                episodes: this.player.history
                            });
                            if (e && this.player.responseKey && ("load" === e.action && this.$ecast.updateObject(this.player.responseKey, {
                                    activateContentId: !0,
                                    contentId: e.contentId
                                }).catch(this.$handleEcastError), "input" === e.action)) {
                                const s = (null === (t = e.answer) || void 0 === t ? void 0 : t.replace(/[^A-Za-z]/gi, "").toUpperCase()) || "";
                                if (s.length < 7) return;
                                this.$ecast.updateObject(this.player.responseKey, {
                                    activateContentId: !0,
                                    contentId: s
                                }).catch(this.$handleEcastError)
                            }
                        }))
                    }
                }
            });
            var M = (0, d.Z)(G, A, [], !1, null, null, null);
            M.options.__file = "src/games/pp8/drawful-animate/views/Lobby.vue";
            const K = M.exports;
            var W = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "post-game scrollable"
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.info.name)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain"
                }, [s("PostGameActions", {
                    attrs: {
                        player: t.player,
                        classes: {
                            action: "buttonBlack"
                        }
                    }
                }), t._v(" "), s("GalleryLink", {
                    attrs: {
                        artifact: t.artifact
                    }
                })], 1)])
            };
            W._withStripped = !0;
            var V = s(56623),
                H = s(83933);
            const j = n().extend({
                components: {
                    GalleryLink: V.Z,
                    PostGameActions: H.Z
                },
                props: {
                    artifact: Object,
                    info: Object,
                    player: Object
                }
            });
            var F = (0, d.Z)(j, W, [], !1, null, null, null);
            F.options.__file = "src/games/pp8/drawful-animate/views/PostGame.vue";
            const Y = F.exports;
            var X = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "ugc scrollable",
                    attrs: {
                        id: "controller"
                    }
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.ugcHeader)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain"
                }, [0 === t.player.validActions.length ? s("div", {
                    domProps: {
                        textContent: t._s(t.player.noActionsText)
                    }
                }) : t._e(), t._v(" "), t.player.validActions.includes("toggle-visibility") ? s("div", {
                    staticClass: "ugc-action ugc-action-toggle-visibility"
                }, [s("span", {
                    staticClass: "text toggle_prompts_prompt"
                }, [t._v(t._s(t.$t("UGC.TOGGLE_PROMPTS_PROMPT")))]), s("br"), t._v(" "), s("button", {
                    staticClass: "ugc-toggle-visibility-button ugc-toggle-visibility-button-controller",
                    class: {
                        on: t.player.controllerVisibility
                    },
                    attrs: {
                        id: "ugc-toggle-visibility-button-controller",
                        "data-target": "controller"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onToggleVisibility("controller")
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "ugc-toggle-visibility-button  ugc-toggle-visibility-button-screen",
                    class: {
                        on: t.player.screenVisibility
                    },
                    attrs: {
                        id: "ugc-toggle-visibility-button-screen",
                        "data-target": "screen"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onToggleVisibility("screen")
                        }
                    }
                })]) : t._e(), t._v(" "), t.player.validActions.includes("play") ? s("div", {
                    staticClass: "ugc-action ugc-action-play"
                }, [s("div", {
                    staticClass: "ugc-episode-name"
                })]) : t._e(), t._v(" "), t.player.validActions.includes("new") ? s("div", {
                    staticClass: "ugc-action ugc-action-new"
                }, [s("button", {
                    staticClass: "button action-button create_new_episode",
                    attrs: {
                        id: "ugc-new-button",
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("new")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.CREATE_NEW_EPISODE")))])]) : t._e(), t._v(" "), t.player.validActions.includes("load") ? s("div", {
                    staticClass: "ugc-action ugc-action-load"
                }, [s("p", {
                    staticClass: "ugc-option text-box ugc-load previous_episodes"
                }, [t._v(t._s(t.$t("UGC.PREVIOUS_EPISODES")))]), t._v(" "), s("div", {
                    attrs: {
                        id: "episodesRegion"
                    }
                }, [s("div", {
                    staticClass: "episodesList"
                }, t._l(t.player.episodes, (function(e, i) {
                    return s("div", {
                        key: e.remoteContentId || e.localContentId
                    }, [s("button", {
                        staticClass: "action-button",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onEpisodeClick(i)
                            }
                        }
                    }, [s("span", {
                        domProps: {
                            textContent: t._s(e.metadata.title)
                        }
                    }), t._v(" "), null !== e.remoteContentId ? s("span", {
                        staticClass: "episodeId",
                        domProps: {
                            textContent: t._s(e.formattedRemoteContentId)
                        }
                    }) : t._e()])])
                })), 0)])]) : t._e(), t._v(" "), t.player.text ? s("div", {
                    staticClass: "prompt ugc-text",
                    attrs: {
                        id: "prompt",
                        "v-text": t.player.text
                    }
                }) : t._e(), t._v(" "), 0 === t.player.validActions.length ? s("div", {
                    attrs: {
                        id: "ugc-no-actions"
                    }
                }, [s("div", {
                    attrs: {
                        id: "ugc-no-actions-text"
                    }
                })]) : t._e(), t._v(" "), t.player.validActions.includes("add") ? s("div", {
                    staticClass: "ugc-action ugc-action-add"
                }, [s("div", {
                    attrs: {
                        id: "toggleRegion"
                    }
                }), t._v(" "), s("div", {
                    attrs: {
                        id: "inputRegion"
                    }
                }, [s("div", {
                    staticClass: "promptInput"
                }, [s("div", [t._v(t._s(t.promptCharacterCount))]), t._v(" "), s("textarea", {
                    ref: "promptTextarea",
                    attrs: {
                        id: "promptTextarea",
                        "aria-label": "add a prompt",
                        rows: "1",
                        maxlength: t.player.maxContentLength,
                        placeholder: t.$t("UGC.INPUT_PLACEHOLDER")
                    },
                    domProps: {
                        value: t.answer
                    },
                    on: {
                        input: t.onInput,
                        keypress: function(e) {
                            return t.onKeypress(e, "prompt")
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "buttonBlack createButton",
                    attrs: {
                        disabled: t.player.count === t.player.maxCount
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.createNewPrompt.apply(null, arguments)
                        }
                    }
                }, [t._v("\n                        " + t._s(t.$t("UGC.BUTTON_ADD")) + "\n                    ")])])])]) : t._e(), t._v(" "), t.player.validActions.includes("title") ? s("div", {
                    staticClass: "ugc-action ugc-action-title"
                }, [s("label", {
                    staticClass: "text-box",
                    attrs: {
                        for: "textinput"
                    }
                }, [s("span", {
                    staticClass: "text create_new_name_prompt"
                }, [t._v(t._s(t.$t("UGC.CREATE_NEW_NAME_PROMPT")))])]), t._v(" "), s("div", {
                    staticClass: "titleInput"
                }, [s("div", [t._v(t._s(t.titleCharacterCount))]), t._v(" "), s("textarea", {
                    ref: "titleTextarea",
                    attrs: {
                        id: "titleTextarea",
                        rows: "1",
                        maxlength: t.player.maxTitleLength,
                        placeholder: t.$t("UGC.TITLE_INPUT_PLACEHOLDER")
                    },
                    domProps: {
                        value: t.answer
                    },
                    on: {
                        input: t.onInput,
                        keypress: function(e) {
                            return t.onKeypress(e, "title")
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "buttonBlack createButton",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.createNewEpisode.apply(null, arguments)
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.CREATE_NEW_BUTTON")))])])]) : t._e(), t._v(" "), t.player.validActions.includes("close") ? s("div", {
                    staticClass: "ugc-action ugc-action-close"
                }, [s("button", {
                    staticClass: "button action-button button_close",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("close")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_CLOSE")))])]) : t._e(), t._v(" "), t.player.validActions.includes("unlock") ? s("div", {
                    staticClass: "ugc-action ugc-action-unlock"
                }, [s("button", {
                    staticClass: "button action-button button_edit",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("unlock")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_EDIT")))])]) : t._e(), t._v(" "), t.player.validActions.includes("done") ? s("div", {
                    staticClass: "ugc-action ugc-action-done"
                }, [s("button", {
                    staticClass: "button action-button button_done",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("done")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_DONE")))])]) : t._e(), t._v(" "), t.player.validActions.includes("submit") ? s("div", {
                    staticClass: "ugc-action ugc-action-submit"
                }, [s("button", {
                    staticClass: "button action-button button_publish",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.showTermsOfService.apply(null, arguments)
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_PUBLISH")))])]) : t._e(), t._v(" "), t.player.validActions.includes("play") ? s("div", {
                    staticClass: "ugc-action ugc-action-play"
                }, [s("button", {
                    staticClass: "button action-button button_play",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("play")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_PLAY")))])]) : t._e(), t._v(" "), t.player.validActions.includes("remove-content") ? s("div", {
                    staticClass: "ugc-action ugc-action-remove-content"
                }, [s("button", {
                    staticClass: "button action-button button_delete",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.showConfirmDeleteDialog.apply(null, arguments)
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_DELETE")))])]) : t._e(), t._v(" "), t.player.validActions.includes("exit") ? s("div", {
                    staticClass: "ugc-action ugc-action-exit"
                }, [s("button", {
                    staticClass: "button action-button button_back_to_menu",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("exit")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_BACK_TO_MENU")))])]) : t._e(), t._v(" "), t.player.validActions.includes("episodes") ? s("div", {
                    staticClass: "ugc-action ugc-action-episodes"
                }, [s("button", {
                    staticClass: "button action-button button_back_to_episodes",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("episodes")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_BACK_TO_EPISODES")))])]) : t._e(), t._v(" "), t.player.validActions.includes("remove") ? s("div", {
                    staticClass: "ugc-action ugc-action-remove"
                }, [s("div", {
                    staticClass: "promptsCount",
                    attrs: {
                        id: "promptsCount"
                    },
                    domProps: {
                        textContent: t._s(t.promptsCount)
                    }
                }), t._v(" "), s("div", {
                    attrs: {
                        id: "promptsRegion"
                    }
                }, [s("div", {
                    staticClass: "promptsList"
                }, t._l(t.player.prompts, (function(e, i) {
                    return s("div", {
                        key: i
                    }, [s("button", {
                        staticClass: "player-prompt",
                        class: {
                            other: e.author !== t.userId
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onPromptClick(i)
                            }
                        }
                    }, [s("span", {
                        domProps: {
                            textContent: t._s(e.text)
                        }
                    })])])
                })), 0)])]) : t._e()])])
            };
            X._withStripped = !0;
            var Z = s(3682),
                z = s(89446),
                q = function(t, e, s, i) {
                    return new(s || (s = Promise))((function(a, n) {
                        function o(t) {
                            try {
                                l(i.next(t))
                            } catch (t) {
                                n(t)
                            }
                        }

                        function r(t) {
                            try {
                                l(i.throw(t))
                            } catch (t) {
                                n(t)
                            }
                        }

                        function l(t) {
                            var e;
                            t.done ? a(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                t(e)
                            }))).then(o, r)
                        }
                        l((i = i.apply(t, e || [])).next())
                    }))
                };
            const J = n().extend({
                props: {
                    player: Object
                },
                i18n: {
                    messages: c
                },
                bb: {
                    tos: (t, e) => `<a class="tosLink" href="https://jackboxgames.com/terms-of-service/" target="_blank">${e}</a>`
                },
                data: () => ({
                    answer: ""
                }),
                computed: {
                    ugcHeader() {
                        return this.player.validActions.includes("load") ? this.$t("UGC.HEADER_DEFAULT") : this.player.validActions.includes("title") ? this.$t("UGC.HEADER_TITLE") : this.player.validActions.includes("add") ? this.$t("UGC.HEADER_WRITE") : this.player.validActions.includes("submit") ? this.$t("UGC.HEADER_PUBLISH") : ""
                    },
                    promptsCount() {
                        const {
                            count: t,
                            maxCount: e,
                            prompts: s
                        } = this.player;
                        if (!s) return "no prompts";
                        if (!e) return "no maxcount";
                        if (void 0 === t) return "no count";
                        let i = `${t}/${e}`;
                        return s.length < t && (i += ` (${t-s.length} hidden)`), i
                    },
                    userId() {
                        return this.$storage.isSupported ? this.$storage.get("uuid") : null
                    },
                    titleCharacterCount() {
                        return this.player.maxTitleLength ? this.player.maxTitleLength - this.answer.length : ""
                    },
                    promptCharacterCount() {
                        return this.player.maxContentLength ? this.player.maxContentLength - this.answer.length : ""
                    }
                },
                mounted() {
                    (0, Z.Z)([this.$refs.titleTextarea, this.$refs.promptTextarea])
                },
                methods: {
                    onKeypress(t, e) {
                        "Enter" === t.key && ("prompt" === e && this.createNewPrompt(), "title" === e && this.createNewEpisode())
                    },
                    onInput(t) {
                        const e = t.target;
                        let s = Number.MAX_SAFE_INTEGER;
                        this.player.validActions.includes("title") && (s = this.player.maxTitleLength), this.player.validActions.includes("add") && (s = this.player.maxContentLength), e.value.length > s && (e.value = e.value.substring(0, s)), e.value = z.c.sanitizeInput(e.value), this.answer = e.value
                    },
                    onToggleVisibility(t) {
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: "toggle-visibility",
                            target: t
                        }).catch(this.$handleEcastError)
                    },
                    onActionButtonClicked(t) {
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: t
                        }).catch(this.$handleEcastError)
                    },
                    showTermsOfService() {
                        return q(this, void 0, void 0, (function*() {
                            "confirm" === (yield this.$showModal("Options", {
                                text: this.$t("UGC.TOS_WARNING"),
                                options: [{
                                    text: this.$t("UGC.TOS_WARNING_AGREE"),
                                    classes: ["confirm"],
                                    value: "confirm"
                                }, {
                                    text: this.$t("UGC.TOS_WARNING_BACK"),
                                    classes: ["cancel"],
                                    value: "cancel"
                                }]
                            })) && this.$ecast.updateObject(this.player.responseKey, {
                                action: "submit"
                            }).catch(this.$handleEcastError)
                        }))
                    },
                    showConfirmDeleteDialog() {
                        return q(this, void 0, void 0, (function*() {
                            "confirm" === (yield this.$showModal("Options", {
                                text: this.$t("UGC.DELETE_WARNING"),
                                options: [{
                                    text: this.$t("UGC.DELETE_WARNING_CONFIRM"),
                                    classes: ["confirm"],
                                    value: "confirm"
                                }, {
                                    text: this.$t("UGC.DELETE_WARNING_CANCEL"),
                                    classes: ["cancel"],
                                    value: "cancel"
                                }]
                            })) && this.$ecast.updateObject(this.player.responseKey, {
                                action: "remove-content"
                            }).catch(this.$handleEcastError)
                        }))
                    },
                    createNewEpisode() {
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: "title",
                            text: this.answer
                        }).catch(this.$handleEcastError), this.answer = ""
                    },
                    createNewPrompt() {
                        this.player.count !== this.player.maxCount && (this.$ecast.updateObject(this.player.responseKey, {
                            action: "add",
                            text: this.answer
                        }).catch(this.$handleEcastError), this.answer = "", setTimeout((() => {
                            this.$refs.promptTextarea instanceof HTMLElement && this.$refs.promptTextarea.focus()
                        }), 0))
                    },
                    onEpisodeClick(t) {
                        const e = this.player.episodes[t],
                            s = e.remoteContentId || e.localContentId;
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: "load",
                            contentId: s
                        }).catch(this.$handleEcastError)
                    },
                    onPromptClick(t) {
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: "remove",
                            key: t
                        }).catch(this.$handleEcastError)
                    }
                }
            });
            var Q = (0, d.Z)(J, X, [], !1, null, null, null);
            Q.options.__file = "src/games/pp8/drawful-animate/views/Ugc.vue";
            const tt = Q.exports;
            var et = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "waiting",
                    class: {
                        isFriendMode: t.player.isFriendMode
                    }
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.header)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain stacked"
                }, [t.player.message ? s("div", {
                    staticClass: "message",
                    domProps: {
                        textContent: t._s(t.player.message)
                    }
                }) : t._e(), t._v(" "), s("div", {
                    staticClass: "logo"
                })])])
            };
            et._withStripped = !0;
            const st = n().extend({
                props: {
                    info: Object,
                    player: Object
                },
                computed: {
                    header() {
                        return this.player && this.player.header ? this.player.header : this.info && this.info.name ? this.info.name : this.$ecast.name
                    }
                }
            });
            var it = (0, d.Z)(st, et, [], !1, null, null, null);
            it.options.__file = "src/games/pp8/drawful-animate/views/Waiting.vue";
            const at = it.exports;
            var nt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "writing"
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.player.header)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain"
                }, [t.isSubmitted ? s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "WRITING.DONE",
                        expression: "'WRITING.DONE'"
                    }]
                }) : s("form", {
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                }, [s("fieldset", {
                    attrs: {
                        disabled: t.isSubmitting
                    }
                }, [s("label", {
                    attrs: {
                        for: "text-input"
                    }
                }, [s("p", {
                    staticClass: "prompt",
                    domProps: {
                        textContent: t._s(t.prompt)
                    }
                })]), t._v(" "), s("textarea", {
                    ref: "textarea",
                    attrs: {
                        id: "text-input",
                        rows: "1",
                        maxlength: t.player.maxLength,
                        placeholder: t.player.placeholder
                    },
                    domProps: {
                        value: t.answer
                    },
                    on: {
                        input: t.onInput,
                        keypress: t.onKeypress
                    }
                }), t._v(" "), t.player.isFriendMode ? s("div", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "WRITING.FRIEND_HINT",
                        expression: "'WRITING.FRIEND_HINT'"
                    }],
                    staticClass: "friend-hint"
                }) : t._e(), t._v(" "), t.player.error ? s("div", {
                    staticClass: "error"
                }, [t._v(t._s(t.player.error))]) : t._e(), t._v(" "), t.filterError ? s("div", {
                    staticClass: "error"
                }, [t._v(t._s(t.$t("WRITING.FILTER_ERROR")))]) : t._e(), t._v(" "), s("div", {
                    staticClass: "controls"
                }, [s("div", {
                    staticClass: "remaining",
                    domProps: {
                        textContent: t._s(t.remainingCharacters)
                    }
                }), t._v(" "), s("button", {
                    staticClass: "submit",
                    attrs: {
                        type: "submit",
                        value: "Submit",
                        disabled: !t.hasAnswer
                    }
                }, [t._v("\n                        " + t._s(t.submitText) + "\n                    ")])])])])])])
            };
            nt._withStripped = !0;
            var ot = function(t, e, s, i) {
                return new(s || (s = Promise))((function(a, n) {
                    function o(t) {
                        try {
                            l(i.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(t) {
                        try {
                            l(i.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(o, r)
                    }
                    l((i = i.apply(t, e || [])).next())
                }))
            };
            const rt = n().extend({
                props: {
                    player: Object,
                    audience: Boolean
                },
                i18n: {
                    messages: c
                },
                data: () => ({
                    answer: "",
                    filterError: !1,
                    isSubmitting: !1,
                    isSubmitted: !1,
                    autoSubmitter: void 0
                }),
                computed: {
                    sanitizedAnswer() {
                        return z.c.sanitizeInput(this.answer).trim()
                    },
                    prompt() {
                        return this.player.prompt || this.$t("WRITING.PROMPT")
                    },
                    remainingCharacters() {
                        return this.player.maxLength && this.answer ? "" + (this.player.maxLength - this.answer.length) : ""
                    },
                    canSubmit() {
                        return !(!this.sanitizedAnswer || this.player.maxLength && this.sanitizedAnswer.length > this.player.maxLength)
                    },
                    submitText() {
                        return this.player.submitText || this.$t("WRITING.BUTTON_SUBMIT")
                    },
                    hasAnswer() {
                        var t;
                        return (null === (t = this.answer) || void 0 === t ? void 0 : t.trim().length) > 0
                    }
                },
                watch: {
                    "player.writingId": function() {
                        this.player.error || (this.answer = ""), this.isSubmitting = !1
                    }
                },
                mounted() {
                    this.autoSubmitter = (0, w.throttle)(this.autoSubmit.bind(this), 400), (0, Z.Z)(this.$refs.textarea), this.player.textKey && this.restoreText()
                },
                beforeDestroy() {
                    var t;
                    null === (t = this.autoSubmitter) || void 0 === t || t.cancel()
                },
                methods: {
                    restoreText() {
                        return ot(this, void 0, void 0, (function*() {
                            try {
                                const t = yield this.$ecast.getText(this.player.textKey);
                                this.answer = t.text
                            } catch (t) {
                                this.$handleEcastError(t)
                            }
                        }))
                    },
                    autoSubmit() {
                        return ot(this, void 0, void 0, (function*() {
                            if (!this.isSubmitting) try {
                                yield this.$ecast.updateText(this.player.textKey, this.sanitizedAnswer)
                            } catch (t) {
                                t instanceof r.EcastFilterError || this.$handleEcastError(t), this.$ecast.updateText(this.player.textKey, "").catch(this.$handleEcastError)
                            }
                        }))
                    },
                    onKeypress(t) {
                        "Enter" === t.key && this.onSubmit()
                    },
                    onInput(t) {
                        const e = t.target,
                            s = this.player.maxLength || Number.MAX_SAFE_INTEGER;
                        e.value.length > s && (e.value = e.value.substring(0, s)), e.value = z.c.sanitizeInput(e.value), this.answer = e.value, this.filterError = !1, this.player.responseKey && this.autoSubmitter && this.autoSubmitter()
                    },
                    onSubmit() {
                        return ot(this, void 0, void 0, (function*() {
                            if (this.isSubmitting = !0, this.audience) try {
                                this.player.textRingName && (yield this.$ecast.pushTextRing(this.player.textRingName, this.sanitizedAnswer), this.isSubmitted = !0)
                            } catch (t) {
                                this.$handleEcastError(t)
                            } else try {
                                if (yield this.$ecast.getText(this.player.textKey), yield this.$ecast.updateText(this.player.textKey, this.sanitizedAnswer), this.filterError = !1, this.player.responseKey) try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        answer: this.sanitizedAnswer,
                                        done: !0
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                            } catch (t) {
                                t instanceof r.EcastFilterError || this.$handleEcastError(t), this.filterError = !0, this.isSubmitting = !1, setTimeout((() => {
                                    this.$refs.textarea instanceof HTMLElement && this.$refs.textarea.focus()
                                }), 0)
                            }
                        }))
                    }
                }
            });
            var lt = (0, d.Z)(rt, nt, [], !1, null, null, null);
            lt.options.__file = "src/games/pp8/drawful-animate/views/Writing.vue";
            const ct = lt.exports,
                ut = n().extend({
                    components: {
                        Drawing: T,
                        Waiting: at,
                        Lobby: K,
                        PostGame: Y,
                        Writing: ct,
                        Choosing: _,
                        Flipping: P,
                        Ugc: tt
                    },
                    themeColor: "#611785",
                    props: {
                        info: Object,
                        player: Object,
                        audiencePlayer: Object,
                        artifact: Object,
                        timer: Object,
                        audienceTimer: Object
                    },
                    ecastKeys: {
                        info: ({
                            id: t
                        }) => `info:${t}`,
                        player: ({
                            id: t
                        }) => `player:${t}`,
                        audiencePlayer: "audiencePlayer",
                        timer: "timer",
                        audienceTimer: "audienceTimer"
                    },
                    ecastProviders: {
                        artifact: t => {
                            if (t.artifact) return t.artifact;
                            let e, s = 0;
                            for (; t[`artifact:${s}`];) e = t[`artifact:${s}`], s += 1;
                            return e
                        }
                    },
                    computed: {
                        parsedKind() {
                            return this.player ? this.player.playerCanDoEpisodes ? "lobby" : this.player.kind : ""
                        },
                        audienceInfo: () => ({
                            name: "audience"
                        })
                    },
                    watch: {
                        player: function(t, e) {
                            if (t && e && e.playerCanDoEpisodes && !t.playerCanDoEpisodes) {
                                const t = e.activeContentId ? "drawful-animate-vip-ugc" : "drawful-animate-vip";
                                this.$analytics.trackEvent({
                                    category: "Lobby",
                                    action: "gameStarted",
                                    label: t
                                })
                            }
                        }
                    },
                    mounted() {
                        this.$debug.setAutomarkIgnoredKeys(["timer"])
                    }
                });
            var pt = (0, d.Z)(ut, i, [], !1, null, "31bec97a", null);
            pt.options.__file = "src/games/pp8/drawful-animate/views/Main.vue";
            const dt = pt.exports
        },
        57095: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/drawful-animate/0a6e431a4dfeabcedffc.svg"
        }
    }
]);
//# sourceMappingURL=sourcemaps/1447.49983de6879933057368.js.map