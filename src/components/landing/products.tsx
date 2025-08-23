
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  { name: "Stearic Acid", brand: "Godrej,Adani", grade: "Distric, SAP,1843" ,Packaging: "25 kg"},
  { name: "Talcum Powder", brand: "Golcha", grade: "Rajat",Packaging: "25 kg" },
  { name: "Dimethyl Phthalate",  brand: "KLJ", grade: "KANATOL-100",Packaging: "250 kg drum" },
  { name: "PVC Resin", brand: "CGPC", grade: "H-66",Packaging: "25 kg" },
];

export function Products() {
  return (
    <section id="products" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Our Top Products</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl text-justify">
            High-quality chemicals available for bulk enterprise orders.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-base p-6">Product Name</TableHead>
                <TableHead className="font-bold text-base p-6">Brand</TableHead>
                <TableHead className="font-bold text-base p-6">Grade</TableHead>
                <TableHead className="font-bold text-base p-6">Packaging</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={`${product.name}-${index}`}>
                  <TableCell className="uppercase font-bold text-base p-6">{product.name}</TableCell>
                  <TableCell className="text-base p-6">{product.brand}</TableCell>
                  <TableCell className="text-base p-6">{product.grade}</TableCell>
                  <TableCell className="text-base p-6">{product.Packaging}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
