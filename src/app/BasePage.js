import React, {Suspense, lazy} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import {LayoutSplashScreen, ContentRoute} from "../_metronic/layout";
import {ShowWarehouse} from "./Warehouse/ShowWarehouse";
import Product from './Product/Product'
import DetailWarehouse from './Warehouse/DetailWarehouse'
import AddWearhouse from './Warehouse/AddWarehouse'
import ShowShopFacebook from './Shop/ShowShop'
import ShopFacebook from './Shop/Shop'
import ShowShopLine from './ShopLine/ShowShop'
import ShopLine from './ShopLine/ShopLine'
import ConfigFeed from './Shop/ConfigFeed'

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);

export default function BasePage() {

    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
            <Switch>
                {
                    <Redirect exact from="/" to="/warehouse"/>
                }
                <ContentRoute path="/warehouse" component={ShowWarehouse}/>
                <ContentRoute path="/addWearhouse" component={AddWearhouse}/>
                <ContentRoute path="/product" component={Product}/>
                <ContentRoute path="/showShopFacebook" component={ShowShopFacebook}/>
                <ContentRoute path="/shopFacebook" component={ShopFacebook}/>
                <ContentRoute path="/showShopLine" component={ShowShopLine}/>
                <ContentRoute path="/shopLine" component={ShopLine}/>
                <ContentRoute path="/configFeed" component={ConfigFeed}/>
                <ContentRoute path="/detailWarehouse" component={DetailWarehouse}/>
                <Route path="/google-material" component={GoogleMaterialPage}/>
                <Route path="/react-bootstrap" component={ReactBootstrapPage}/>
                <Redirect to="error/error-v1"/>
            </Switch>
        </Suspense>
    );
}
