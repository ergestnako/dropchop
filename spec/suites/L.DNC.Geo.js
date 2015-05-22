describe("L.DNC.GeoExecute", function () {
    var menu;
    var ops;
    var _console = {};

    beforeEach(function () {
        ops = {
            geo: new L.DNC.Geo(),
            geox: new L.DNC.GeoExecute()
        };


        _console.debug = console.debug;
        console.debug = function(){};
    });

    afterEach(function () {
        console.debug = _console.debug;
    });

    /*
    **
    ** BEZIER TEST
    **
    */
    describe("bezier", function () {

        it("min attributes", function () {
            var formData = {
                action: 'bezier',
                parameters: [],
            };

            var inputLayers = [{
                info: {
                    name: "line.geojson",
                    overlay: true
                },
                layer: {
                    _geojson: window.testingData.line
                }
            }];

            var layer = ops.geox.execute( formData.action, formData.parameters, ops.geo[formData.action], inputLayers);
            expect(layer.name).to.equal("bezier_line.geojson");
            var expected = 
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [ -76.091308, 18.427501 ], [ -76.09134585033101, 18.427508082543092 ], [ -76.09145894415556, 18.427529339568483 ], [ -76.091646595721, 18.427564785170365 ], [ -76.09190811927459, 18.427614433442898 ], [ -76.09224282906366, 18.427678298480274 ], [ -76.09265003933552, 18.427756394376658 ], [ -76.09312906433745, 18.42784873522624 ], [ -76.0936792183168, 18.427955335123198 ], [ -76.09429981552083, 18.428076208161706 ], [ -76.10557951232501, 18.430351869862502 ], [ -76.10699193951532, 18.4306451199455 ], [ -76.10846589514533, 18.43095282639436 ], [ -76.11000069346233, 18.43127500330327 ], [ -76.11159564871359, 18.431611664766397 ], [ -76.11325007514648, 18.431962824877928 ], [ -76.11496328700827, 18.432328497732037 ], [ -76.11673459854629, 18.432708697422903 ], [ -76.1185633240078, 18.4331034380447 ], [ -76.12044877764015, 18.43351273369161 ], [ -76.14473670160001, 18.438979648400004 ], [ -76.14724940457211, 18.43956470369415 ], [ -76.1498099209301, 18.44016449723774 ], [ -76.15241756492114, 18.440779043124927 ], [ -76.15507165079259, 18.4414083554499 ], [ -76.1577714927918, 18.442052448306836 ], [ -76.16051640516602, 18.44271133578991 ], [ -76.16330570216259, 18.44338503199331 ], [ -76.1661386980288, 18.4440735510112 ], [ -76.16901470701197, 18.444776906937765 ], [ -76.20329354627498, 18.453497089037498 ], [ -76.20663222395146, 18.454379587214063 ], [ -76.2100049999598, 18.45527710552361 ], [ -76.21341118854745, 18.456189658060335 ], [ -76.21685010396158, 18.457117258918394 ], [ -76.2203210604496, 18.458059922191993 ], [ -76.22382337225875, 18.45901766197528 ], [ -76.22735635363641, 18.459990492362465 ], [ -76.23091931882978, 18.460978427447696 ], [ -76.23451158208628, 18.461981481325175 ], [ -76.27576402480001, 18.4740169452 ], [ -76.27965437610327, 18.475202523930218 ], [ -76.28356511068456, 18.476403404676986 ], [ -76.28749554279125, 18.477619601534485 ], [ -76.2914449866706, 18.4788511285969 ], [ -76.29541275656992, 18.480097999958396 ], [ -76.29939816673652, 18.48136022971316 ], [ -76.30340053141771, 18.48263783195537 ], [ -76.3074191648608, 18.4839308207792 ], [ -76.31145338131307, 18.485239210278827 ], [ -76.356662115625, 18.5006519703125 ], [ -76.36082983947757, 18.502146267267626 ], [ -76.36500423155434, 18.50365614812286 ], [ -76.36918460610255, 18.50518162697239 ], [ -76.3733702773696, 18.506722717910403 ], [ -76.37756055960273, 18.508279435031053 ], [ -76.38175476704927, 18.509851792428538 ], [ -76.38595221395651, 18.511439804197025 ], [ -76.3901522145718, 18.513043484430696 ], [ -76.3943540831424, 18.514662847223736 ], [ -76.4405017972, 18.5335149178 ], [ -76.44467259252437, 18.53532357065128 ], [ -76.44883634101906, 18.537148089286234 ], [ -76.45299235693136, 18.53898848779905 ], [ -76.45713995450859, 18.5408447802839 ], [ -76.46127844799805, 18.54271698083496 ], [ -76.46540715164704, 18.544605103546413 ], [ -76.46952537970284, 18.54650916251243 ], [ -76.47363244641281, 18.5484291718272 ], [ -76.47772766602421, 18.55036514558489 ], [ -76.52179704797499, 18.572718541087497 ], [ -76.5256966136937, 18.574847187506183 ], [ -76.52957541752883, 18.576991981592116 ], [ -76.53343277372768, 18.579152937439456 ], [ -76.5372679965376, 18.5813300691424 ], [ -76.54108040020587, 18.58352339079512 ], [ -76.54486929897976, 18.585732916491786 ], [ -76.54863400710666, 18.58795866032659 ], [ -76.55237383883379, 18.5902006363937 ], [ -76.55608810840853, 18.592458858787296 ], [ -76.5950618464, 18.618375593600003 ], [ -76.59841588143553, 18.620829871257346 ], [ -76.60173543953358, 18.623300578465486 ], [ -76.60501983494149, 18.625787729318613 ], [ -76.60826838190658, 18.628291337910895 ], [ -76.61148039467618, 18.63081141833652 ], [ -76.61465518749752, 18.63334798468966 ], [ -76.61779207461795, 18.635901051064497 ], [ -76.6208903702848, 18.638470631555194 ], [ -76.62394938874533, 18.641056740255955 ], [ -76.654810170925, 18.6705988287625 ], [ -76.65734437419981, 18.673384375329746 ], [ -76.65983038548332, 18.676186633331362 ], [ -76.66226751902282, 18.67900561686152 ], [ -76.66465508906559, 18.681841340014397 ], [ -76.66699240985896, 18.684693816884177 ], [ -76.66927879565027, 18.687563061565037 ], [ -76.67151356068679, 18.69044908815115 ], [ -76.6736960192158, 18.6933519107367 ], [ -76.67582548548464, 18.696271543415858 ], [ -76.695556, 18.729501 ], [ -76.69703437566223, 18.73262792338629 ], [ -76.69852753994287, 18.735780536822837 ], [ -76.70003493490783, 18.73895848878864 ], [ -76.701556002623, 18.7421614277627 ], [ -76.7030901851543, 18.745389002224023 ], [ -76.70463692456762, 18.748640860651612 ], [ -76.70619566292888, 18.751916651524468 ], [ -76.70776584230401, 18.7552160233216 ], [ -76.70934690475886, 18.758538624522004 ], [ -76.727297305875, 18.7965198433375 ], [ -76.72896544642754, 18.800093778739445 ], [ -76.73063721691662, 18.80368637377171 ], [ -76.73231205940814, 18.807297276913296 ], [ -76.73398941596801, 18.8109261366432 ], [ -76.73566872866212, 18.814572601440428 ], [ -76.73734943955637, 18.818236319783985 ], [ -76.73903099071671, 18.821916940152875 ], [ -76.740712824209, 18.8256141110261 ], [ -76.74239438209916, 18.82932748088266 ], [ -76.76071376, 18.8711431472 ], [ -76.76234849180535, 18.87502348621885 ], [ -76.76397569486538, 18.878915454448087 ], [ -76.76559481124596, 18.882818700366702 ], [ -76.767205283013, 18.8867328724537 ], [ -76.76880655223242, 18.890657619188083 ], [ -76.77039806097012, 18.894592589048862 ], [ -76.77197925129202, 18.898537430515034 ], [ -76.773549565264, 18.9024917920656 ], [ -76.77510844495198, 18.906455322179568 ], [ -76.791341889625, 18.950558743612497 ], [ -76.79272003904568, 18.95460487784951 ], [ -76.79407950103914, 18.95865561087696 ], [ -76.79541971767127, 18.96271059117386 ], [ -76.79674013100801, 18.9667694672192 ], [ -76.79804018311525, 18.97083188749199 ], [ -76.79931931605887, 18.974897500471236 ], [ -76.80057697190483, 18.97896595463594 ], [ -76.801812592719, 18.9830368984651 ], [ -76.8030256205673, 18.987109980437722 ], [ -76.814718222, 19.0319544646 ], [ -76.81561661539848, 19.036025785656417 ], [ -76.81648516268787, 19.04009467508334 ], [ -76.81732330593408, 19.044160781359764 ], [ -76.818130487203, 19.048223752964702 ], [ -76.81890614856056, 19.052283238377147 ], [ -76.81964973207262, 19.056338886076112 ], [ -76.82036067980513, 19.060390344540593 ], [ -76.82103843382401, 19.064437262249598 ], [ -76.82168243619512, 19.068479287682127 ], [ -76.826379284375, 19.1125181421875 ], [ -76.8265747481138, 19.116474041664574 ], [ -76.82672920706162, 19.120420479092214 ], [ -76.82684210328439, 19.12435710294942 ], [ -76.826912878848, 19.1282835617152 ], [ -76.82694097581836, 19.132199503868552 ], [ -76.82692583626137, 19.136104577888485 ], [ -76.82686690224294, 19.139998432254 ], [ -76.82676361582901, 19.143880715444098 ], [ -76.82661541908544, 19.147751075937787 ], [ -76.821861604, 19.1894376084 ], [ -76.8211309644416, 19.193137477898976 ], [ -76.82034816141037, 19.196820854928585 ], [ -76.81951263697219, 19.200487387967826 ], [ -76.81862383319299, 19.204136725495704 ], [ -76.81768119213868, 19.207768515991212 ], [ -76.81668415587512, 19.211382407933364 ], [ -76.81563216646825, 19.214978049801154 ], [ -76.814524665984, 19.2185550900736 ], [ -76.81336109648824, 19.22211317722969 ], [ -76.79670170812501, 19.259900695262502 ], [ -76.79482179163192, 19.263203926384637 ], [ -76.79287855298412, 19.26648363461746 ], [ -76.79087143424752, 19.26973946843999 ], [ -76.78879987748799, 19.2729710763312 ], [ -76.78666332477148, 19.276178106770118 ], [ -76.78446121816386, 19.279360208235737 ], [ -76.78219299973108, 19.282517029207064 ], [ -76.779858111539, 19.285648218163097 ], [ -76.77745599565355, 19.28875342358285 ], [ -76.746436124, 19.3210952348 ], [ -76.74318375693473, 19.323861219146544 ], [ -76.73985690903287, 19.326596650183838 ], [ -76.73645502236033, 19.329301176390892 ], [ -76.73297753898301, 19.3319744462467 ], [ -76.72942390096681, 19.334616108230275 ], [ -76.72579355037762, 19.337225810820613 ], [ -76.72208592928139, 19.339803202496718 ], [ -76.718300479744, 19.342347931737603 ], [ -76.71443664383135, 19.344859647022254 ], [ -76.666601378875, 19.370209059037503 ], [ -76.66175338760004, 19.3722971882097 ], [ -76.65681975680661, 19.374347733652716 ], [ -76.65179992856065, 19.376360343845544 ], [ -76.64669334492801, 19.3783346672672 ], [ -76.64149944797461, 19.380270352396682 ], [ -76.63621767976637, 19.38216704771299 ], [ -76.6308474823692, 19.38402440169513 ], [ -76.625388297849, 19.385842062822103 ], [ -76.61983956827166, 19.38761967957291 ], [ -76.552734, 19.40443 ], [ -76.54608290200076, 19.405678154906546 ], [ -76.5393671072398, 19.406839521697353 ], [ -76.53258713657226, 19.407915019979185 ], [ -76.52574351085329, 19.4089055693588 ], [ -76.51883675093808, 19.409812089442966 ], [ -76.51186737768175, 19.410635499838452 ], [ -76.5048359119395, 19.411376720152006 ], [ -76.4977428745664, 19.412036669990403 ], [ -76.49058878641766, 19.412616268960395 ], [ -76.4080134301625, 19.413951707850003 ], [ -76.4001673594079, 19.41363882572667 ], [ -76.39226700899465, 19.413257547622848 ], [ -76.38431289977791, 19.412808793145306 ], [ -76.37630555261279, 19.412293481900804 ], [ -76.36824548835449, 19.411712533496093 ], [ -76.36013322785814, 19.41106686753795 ], [ -76.35196929197889, 19.41035740363313 ], [ -76.3437542015719, 19.4095850613884 ], [ -76.33548847749232, 19.40875076041052 ], [ -76.2413726548, 19.3957471808 ], [ -76.2325399533513, 19.394241104351792 ], [ -76.22366338934702, 19.392685024058352 ], [ -76.21474348364231, 19.391079859526435 ], [ -76.2057807570923, 19.3894265303628 ], [ -76.19677573055216, 19.387725956174222 ], [ -76.187728924877, 19.38597905656745 ], [ -76.17864086092206, 19.384186751149258 ], [ -76.1695120595424, 19.3823499595264 ], [ -76.16034304159322, 19.38046960130564 ], [ -76.05697851513749, 19.35717327295 ], [ -76.04736752505596, 19.35484184488192 ], [ -76.0377230895219, 19.35247880510385 ], [ -76.02804572939047, 19.35008507322256 ], [ -76.0183359655168, 19.3476615688448 ], [ -76.00859431875605, 19.345209211577345 ], [ -75.99882130996339, 19.342728921026954 ], [ -75.98901745999396, 19.340221616800385 ], [ -75.97918328970289, 19.337688218504397 ], [ -75.96931931994538, 19.33512964574577 ], [ -75.85899785240001, 19.3055868384 ], [ -75.84881691574688, 19.302797901417048 ], [ -75.83861295074429, 19.299995744859352 ], [ -75.82838647824737, 19.297181288333682 ], [ -75.8181380191113, 19.294355451446805 ], [ -75.8078680941912, 19.29151915380547 ], [ -75.79757722434226, 19.288673315016453 ], [ -75.78726593041961, 19.28581885468651 ], [ -75.77693473327841, 19.282956692422403 ], [ -75.76658415377379, 19.280087747830898 ], [ -75.6515975078125, 19.24834473125 ], [ -75.64105496664904, 19.245466128057167 ], [ -75.63049981423916, 19.24259269742485 ], [ -75.61993257143804, 19.23972535895981 ], [ -75.6093537591008, 19.236865032268803 ], [ -75.59876389808262, 19.234012636958596 ], [ -75.58816350923864, 19.23116909263595 ], [ -75.57755311342402, 19.228335318907636 ], [ -75.56693323149389, 19.225512235380403 ], [ -75.55630438430344, 19.222700761661024 ], [ -75.43894432260001, 19.1928038056 ], [ -75.42824851898744, 19.190203378902297 ], [ -75.41755052123153, 19.187626516900348 ], [ -75.40685085018744, 19.185074139200935 ], [ -75.39615002671029, 19.182547165410803 ], [ -75.38544857165527, 19.180046515136723 ], [ -75.37474700587752, 19.177573107985452 ], [ -75.36404585023216, 19.17512786356376 ], [ -75.3533456255744, 19.172711701478402 ], [ -75.34264685275937, 19.170325541336148 ], [ -75.2252051379875, 19.146320915550003 ], [ -75.2145644139871, 19.14436650805242 ], [ -75.20393191294642, 19.142454057385855 ], [ -75.1933081557206, 19.14058448315706 ], [ -75.18269366316481, 19.138758704972805 ], [ -75.17208895613417, 19.13697764243985 ], [ -75.16149455548388, 19.13524221516495 ], [ -75.15091098206909, 19.133553342754883 ], [ -75.1403387567449, 19.1319119448164 ], [ -75.1297784003665, 19.130318940956272 ], [ -75.0145467952, 19.116252915200004 ], [ -75.004169492873, 19.115312369607548 ], [ -74.99381083060878, 19.114432172981353 ], [ -74.9834713292625, 19.11361324492818 ], [ -74.97315150968932, 19.1128565050548 ], [ -74.96285189274435, 19.11216287296797 ], [ -74.95257299928278, 19.111533268274453 ], [ -74.94231535015975, 19.110968610581008 ], [ -74.93207946623039, 19.1104698194944 ], [ -74.92186586834991, 19.110037814621396 ], [ -74.8111361354625, 19.109956658650002 ], [ -74.80123059687017, 19.11039781766767 ], [ -74.79135411544367, 19.110917717786855 ], [ -74.78150721203816, 19.111517278614308 ], [ -74.7716904075088, 19.112197419756804 ], [ -74.76190422271074, 19.112959060821094 ], [ -74.75214917849914, 19.113803121413948 ], [ -74.74242579572913, 19.114730521142135 ], [ -74.7327345952559, 19.1157421796124 ], [ -74.72307609793457, 19.11683901643152 ], [ -74.61914, 19.134789 ], [ -74.60993812560015, 19.136963412581245 ], [ -74.60082207157122, 19.139201373221212 ], [ -74.5917912027316, 19.14150230501425 ], [ -74.5828448838997, 19.143865631054698 ], [ -74.57398247989394, 19.146290774436917 ], [ -74.56520335553274, 19.148777158255243 ], [ -74.5565068756345, 19.15132420560402 ], [ -74.5478924050176, 19.153931339577603 ], [ -74.5393593085005, 19.156597983270334 ], [ -74.45068427546249, 19.1896937103375 ], [ -74.44307812397861, 19.19302947201909 ], [ -74.43554508923384, 19.196417243646337 ], [ -74.42808453604657, 19.199856448313597 ], [ -74.4206958292352, 19.203346509115203 ], [ -74.41337833361817, 19.20688684914551 ], [ -74.40613141401386, 19.210476891498864 ], [ -74.39895443524071, 19.214116059269614 ], [ -74.3918467621171, 19.217803775552103 ], [ -74.38480775946145, 19.221539463440678 ], [ -74.3117293192, 19.2656331612 ], [ -74.30546481799583, 19.26989950972068 ], [ -74.29926072989898, 19.274206330073966 ], [ -74.29311641972778, 19.278553045354187 ], [ -74.2870312523007, 19.2829390786557 ], [ -74.28100459243613, 19.287363853072854 ], [ -74.27503580495248, 19.29182679169999 ], [ -74.26912425466817, 19.29632731763146 ], [ -74.2632693064016, 19.300864853961603 ], [ -74.25747032497117, 19.30543882378477 ], [ -74.1971936784875, 19.3579921073625 ], [ -74.1920167549268, 19.362958280461026 ], [ -74.18688754084158, 19.367953387279087 ], [ -74.18180540105024, 19.37297685091103 ], [ -74.1767697003712, 19.378028094451203 ], [ -74.17177980362285, 19.383106540993946 ], [ -74.16683507562361, 19.38821161363361 ], [ -74.16193488119188, 19.393342735464547 ], [ -74.15707858514608, 19.398499329581096 ], [ -74.15226555230464, 19.403680819077614 ], [ -74.1019959006, 19.462155303600003 ], [ -74.09765248204653, 19.46759053901512 ], [ -74.09334406933671, 19.473043170036714 ], [ -74.08907002728897, 19.478512619759123 ], [ -74.0848297207217, 19.4839983112767 ], [ -74.08062251445332, 19.489499667683788 ], [ -74.07644777330223, 19.495016112074737 ], [ -74.07230486208685, 19.50054706754389 ], [ -74.0681931456256, 19.5060919571856 ], [ -74.06411198873685, 19.51165020409421 ], [ -74.02105453281251, 19.573507504687502 ], [ -74.01729054663, 19.579181040157962 ], [ -74.01354886265933, 19.58486043312184 ], [ -74.00982884571894, 19.590545106673467 ], [ -74.0061298606272, 19.596234483907196 ], [ -74.00245127220253, 19.601927987917385 ], [ -73.99879244526336, 19.60762504179836 ], [ -73.99515274462807, 19.613325068644485 ], [ -73.9915315351151, 19.6190274915501 ], [ -73.98792818154284, 19.624731733609554 ], [ -73.94928812239999, 19.6874334654 ], [ -73.94584949595222, 19.69311453866456 ], [ -73.94242046808448, 19.698789931309463 ], [ -73.93900040361515, 19.70445906642906 ], [ -73.93558866736271, 19.7101213671177 ], [ -73.93218462414552, 19.715776256469727 ], [ -73.92878763878198, 19.721423157579487 ], [ -73.92539707609055, 19.727061493541328 ], [ -73.9220123008896, 19.732690687449598 ], [ -73.91863267799755, 19.738310162398644 ], [ -73.88161521663751, 19.799317940512502 ], [ -73.87824787728819, 19.804775789309904 ], [ -73.87487743288709, 19.810216419374587 ], [ -73.87150324825262, 19.815639253800907 ], [ -73.8681246882032, 19.8210437156832 ], [ -73.86474111755723, 19.826429228115817 ], [ -73.8613519011331, 19.831795214193107 ], [ -73.85795640374927, 19.83714109700942 ], [ -73.85455399022409, 19.842466299659097 ], [ -73.85114402537603, 19.847770245236486 ], [ -73.81295436279999, 19.904545684800002 ], [ -73.8094042379129, 19.909549546869 ], [ -73.80583830434222, 19.914524652092215 ], [ -73.80225592690634, 19.919470423564 ], [ -73.79865647042371, 19.924386284378702 ], [ -73.7950392997127, 19.92927165763066 ], [ -73.79140377959173, 19.934125966414236 ], [ -73.78774927487923, 19.938948633823767 ], [ -73.78407515039359, 19.9437390829536 ], [ -73.78038077095324, 19.948496736898086 ], [ -73.7382241081625, 19.9985014530375 ], [ -73.73423712510139, 20.002820566116842 ], [ -73.73022162972484, 20.007099384237335 ], [ -73.72617698685131, 20.01133733049334 ], [ -73.72210256129921, 20.0155338279792 ], [ -73.71799771788692, 20.019688299789255 ], [ -73.71386182143287, 20.02380016901786 ], [ -73.70969423675547, 20.027868858759362 ], [ -73.70549432867308, 20.031893792108097 ], [ -73.70126146200421, 20.035874392158426 ], [ -73.652343, 20.07657 ], [ -73.64769498583456, 20.079975141463525 ], [ -73.64306600722146, 20.08333212257571 ], [ -73.63845610711061, 20.08664125660647 ], [ -73.6338653284518, 20.089902856825702 ], [ -73.62929371419492, 20.09311723650332 ], [ -73.62474130728982, 20.096284708909238 ], [ -73.62020815068638, 20.099405587313363 ], [ -73.6156942873344, 20.102480184985602 ], [ -73.6111997601838, 20.105508815195865 ], [ -73.563048434475, 20.1358794902125 ], [ -73.55878929182938, 20.138380945932 ], [ -73.55455004373323, 20.14084050669834 ], [ -73.55033073313642, 20.143258485781438 ], [ -73.5461314029888, 20.1456351964512 ], [ -73.54195209624024, 20.147970951977538 ], [ -73.53779285584058, 20.150266065630362 ], [ -73.53365372473968, 20.15252085067958 ], [ -73.5295347458874, 20.1547356203951 ], [ -73.5254359622336, 20.156910688046832 ], [ -73.4816945088, 20.178305691200002 ], [ -73.47784141761667, 20.180028769139213 ], [ -73.47400907997998, 20.181716217523462 ], [ -73.47019753883973, 20.183368349622654 ], [ -73.4664068371458, 20.1849854787067 ], [ -73.46263701784804, 20.186567918045505 ], [ -73.45888812389633, 20.18811598090899 ], [ -73.45516019824049, 20.189629980567048 ], [ -73.4514532838304, 20.1911102302896 ], [ -73.44776742361591, 20.192557043346554 ], [ -73.408624821825, 20.2063547622375 ], [ -73.4051949620465, 20.20742477036018 ], [ -73.40178671481172, 20.20846541432609 ], [ -73.39840012307054, 20.209477007405127 ], [ -73.3950352297728, 20.2104598628672 ], [ -73.39169207786836, 20.211414293982227 ], [ -73.38837071030707, 20.21234061402011 ], [ -73.3850711700388, 20.213239136250767 ], [ -73.3817935000134, 20.2141101739441 ], [ -73.37853774318071, 20.214954040370017 ], [ -73.3441829724, 20.2225328626 ], [ -73.34119352396881, 20.2230751088699 ], [ -73.33822654707848, 20.223594256381215 ], [ -73.33528208467885, 20.224090618403842 ], [ -73.3323601797198, 20.2245645082077 ], [ -73.32946087515117, 20.225016239062697 ], [ -73.32658421392283, 20.225446124238736 ], [ -73.32373023898461, 20.225854477005733 ], [ -73.3208989932864, 20.226241610633597 ], [ -73.31809051977802, 20.22660783839224 ], [ -73.288712559375, 20.229346151562503 ], [ -73.28618070223362, 20.22948594394337 ], [ -73.28367217563022, 20.22960890296384 ], [ -73.28118702251466, 20.229715341893815 ], [ -73.2787252858368, 20.2298055740032 ], [ -73.27628700854648, 20.229879912561916 ], [ -73.27387223359358, 20.22993867083986 ], [ -73.27148100392792, 20.229982162106957 ], [ -73.26911336249941, 20.230010699633098 ], [ -73.26676935225785, 20.23002459668821 ], [ -73.2425571816, 20.2293007884 ], [ -73.24050009569093, 20.229163434855586 ], [ -73.23846719931697, 20.229015513348962 ], [ -73.23645853542797, 20.228857337150032 ], [ -73.2344741469738, 20.228689219528704 ], [ -73.23251407690428, 20.228511473754885 ], [ -73.23057836816932, 20.228324413098488 ], [ -73.22866706371873, 20.228128350829422 ], [ -73.2267802065024, 20.2279236002176 ], [ -73.22491783947017, 20.227710474532923 ], [ -73.206060437925, 20.2249029323875 ], [ -73.20449530319074, 20.224613740881562 ], [ -73.20295521698871, 20.22432024681159 ], [ -73.2014402222688, 20.2240227634475 ], [ -73.19995036198078, 20.2237216040592 ], [ -73.19848567907461, 20.2234170819166 ], [ -73.19704621650008, 20.223109510289618 ], [ -73.19563201720706, 20.222799202448144 ], [ -73.19424312414539, 20.222486471662098 ], [ -73.19287958026497, 20.222171631201398 ], [ -73.1795659272, 20.218658742800002 ], [ -73.17850992358306, 20.218343021296278 ], [ -73.17747982749547, 20.21802926262671 ], [ -73.1764756818871, 20.217717780061218 ], [ -73.1754975297078, 20.2174088868697 ], [ -73.17454541390741, 20.217102896322068 ], [ -73.1736193774358, 20.216800121688237 ], [ -73.17271946324287, 20.21650087623811 ], [ -73.17184571427839, 20.2162054732416 ], [ -73.17099817349228, 20.215914225968618 ], [ -73.163417248275, 20.213074378912502 ], [ -73.16288755571787, 20.212857435374747 ], [ -73.16238462968722, 20.21264872006934 ], [ -73.1619085131329, 20.212448546266184 ], [ -73.16145924900478, 20.212257227235202 ], [ -73.16103688025272, 20.21207507624629 ], [ -73.16064144982656, 20.211902406569365 ], [ -73.16027300067616, 20.211739531474333 ], [ -73.15993157575139, 20.2115867642311 ], [ -73.15961721800208, 20.211444418109583 ]
                    ]
                },
                "properties": {}
            };

            expect( layer.geometry ).to.eql( expected );
        });
    });

    /*
    **
    ** BUFFER TEST
    **
    */
    describe("buffer", function () {

        it("min attributes", function () {
            var formData = {
                action: 'buffer',
                parameters: [10, 'miles'],
            };

            var inputLayers = [{
                info: {
                    name: "union1.geojson",
                    overlay: true
                },
                layer: {
                    _geojson: window.testingData.polygon
                }
            }];

            var layer = ops.geox.execute( formData.action, formData.parameters, ops.geo[formData.action], inputLayers);
            expect(layer.name).to.equal("buffer_union1.geojson");
            var expected = {
              "type":"Feature",
              "geometry":{
                "type":"Polygon",
                "coordinates":[
                  [ [ -122.33714103698729, 47.49517658129525 ],
                    [ -122.36539575073533, 47.49795942770375 ],
                    [ -122.39256465167946, 47.50620102370241 ],
                    [ -122.4176036541929, 47.51958464937894 ],
                    [ -122.43955052345109, 47.53759597950422 ],
                    [ -122.45756185357637, 47.5595428487624 ],
                    [ -122.47094547925289, 47.58458185127583 ],
                    [ -122.47918707525155, 47.61175075221996 ],
                    [ -122.48196992166005, 47.64000546596801 ],
                    [ -122.48196992166005, 47.640583778456666 ],
                    [ -122.47918707525155, 47.66883849220471 ],
                    [ -122.47094547925289, 47.69600739314885 ],
                    [ -122.45756185357637, 47.72104639566228 ],
                    [ -122.43955052345109, 47.74299326492046 ],
                    [ -122.4176036541929, 47.76100459504573 ],
                    [ -122.39256465167946, 47.774388220722265 ],
                    [ -122.36539575073533, 47.78262981672093 ],
                    [ -122.33714103698729, 47.78541266312943 ],
                    [ -122.33593940734862, 47.78541266312943 ],
                    [ -122.30768469360058, 47.78262981672093 ],
                    [ -122.28051579265644, 47.774388220722265 ],
                    [ -122.255476790143, 47.76100459504573 ],
                    [ -122.23352992088482, 47.74299326492046 ],
                    [ -122.21551859075954, 47.72104639566228 ],
                    [ -122.20213496508302, 47.69600739314885 ],
                    [ -122.19389336908436, 47.66883849220471 ],
                    [ -122.19111052267586, 47.640583778456666 ],
                    [ -122.19111052267586, 47.64000546596801 ],
                    [ -122.19389336908436, 47.61175075221996 ],
                    [ -122.20213496508302, 47.58458185127583 ],
                    [ -122.21551859075954, 47.5595428487624 ],
                    [ -122.23352992088482, 47.53759597950422 ],
                    [ -122.255476790143, 47.51958464937894 ],
                    [ -122.28051579265644, 47.50620102370241 ],
                    [ -122.30768469360058, 47.49795942770375 ],
                    [ -122.33593940734862, 47.49517658129525 ],
                    [ -122.33714103698729, 47.49517658129525 ]
                  ]
                ]
              },
              "properties":{ }
            };
            expect(layer.geometry).to.eql( expected );
        });
    });

    /*
    **
    ** CENTER TEST
    **
    */
    describe("center", function () {

        it("min attributes", function () {
            var formData = {
                action: 'center',
                parameters: [],
            };

            var inputLayers = [{
                info: {
                    name: "center1.geojson",
                    overlay: true
                },
                layer: {
                    _geojson: window.testingData.polygon
                }
            }];

            var layer = ops.geox.execute( formData.action, formData.parameters, ops.geo[formData.action], inputLayers);
            expect(layer.name).to.equal("center_center1.geojson");
            var expected = 
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.33654022216795,
                        47.64029462221234
                    ]
                },
                "properties": {}
            };
            expect(layer.geometry).to.eql( expected );
        });
    });

    /*
    **
    ** CENTROID TEST
    **
    */
    describe("centroid", function () {

        it("min attributes", function () {
            var formData = {
                action: 'centroid',
                parameters: [],
            };

            var inputLayers = [{
                info: {
                    name: "center1.geojson",
                    overlay: true
                },
                layer: {
                    _geojson: window.testingData.polygon
                }
            }];

            var layer = ops.geox.execute( formData.action, formData.parameters, ops.geo[formData.action], inputLayers);
            expect(layer.name).to.equal("centroid_center1.geojson");
            var expected = 
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.33654022216795,
                        47.64029462221234
                    ]
                },
                "properties": {}
            };
            expect(layer.geometry).to.eql( expected );
        });
    });

    /*
    **
    ** ENVELOPE TEST
    **
    */
    describe("envelope", function () {

        it("min attributes", function () {
            var formData = {
                action: 'envelope',
                parameters: [],
            };

            var inputLayers = [{
                info: {
                    name: "feature.geojson",
                    overlay: true
                },
                layer: {
                    _geojson: window.testingData.fc_points
                }
            }];

            var layer = ops.geox.execute( formData.action, formData.parameters, ops.geo[formData.action], inputLayers);
            expect(layer.name).to.equal("envelope_feature.geojson");
            var expected = 
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                6.6796875,
                                25.799891182088334
                            ],
                            [
                                29.8828125,
                                25.799891182088334
                            ],
                            [
                                29.8828125,
                                44.84029065139799
                            ],
                            [
                                6.6796875,
                                44.84029065139799
                            ],
                            [
                                6.6796875,
                                25.799891182088334
                            ]
                        ]
                    ]
                },
                "properties": {}
            };
            expect(layer.geometry).to.eql( expected );
        });
    });

    /*
    **
    ** TIN TEST
    **
    */
    describe("tin", function () {

        it("min attributes", function () {
            var formData = {
                action: 'tin',
                parameters: ['foo'],
            };

            var inputLayers = [{
                info: {
                    name: "points.geojson",
                    overlay: true
                },
                layer: {
                    _geojson: window.testingData.fc_points
                }
            }];

            var layer = ops.geox.execute( formData.action, formData.parameters, ops.geo[formData.action], inputLayers);
            expect(layer.name).to.equal("tin_points.geojson");
            var expected = {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                6.6796875,
                                25.799891182088334
                            ],
                            [
                                24.960937499999996,
                                44.84029065139799
                            ],
                            [
                                29.8828125,
                                32.54681317351517
                            ],
                            [
                                6.6796875,
                                25.799891182088334
                            ]
                        ]
                    ]
                },

                "properties": {
                    "a": "baz",
                    "b": "bar",
                    "c": "bax"
                }
            };
            expect( layer.geometry ).to.eql( expected );
        });
    });






    
});
