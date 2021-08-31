package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
class CustomerApiSimulation extends Simulation {

  //conf
  val value_conf = http.baseUrl("http://localhost:9004")
    .header("Accept",value="application/json")
    .header(name="content-type", value ="application/json")


  //scenario
  val scn = scenario("Customer Management Api operations")

    .exec(http("Get all Customer details")
      .get("/customers")
      .check(status is 200))

    .exec(http("Insert Customer")
      .post("/customers")
      .body(RawFileBody(filePath = "./src/test/resources/bodies/addCustomer.json")).asJson
      .header(name="content-type",value = "application/json")
      .check(status is 200))

    .exec(http("Get by id")
      .get("/customers/1")
      .check(status is 200))

    .exec(http("Update Customer")
      .put("/customers")
      .body(RawFileBody(filePath = "./src/test/resources/bodies/putCustomer.json")).asJson
      .header(name="content-type",value = "application/json")
      .check(status is 200))



  //setup
  setUp(scn.inject(atOnceUsers(users=60))).protocols(value_conf)



}
